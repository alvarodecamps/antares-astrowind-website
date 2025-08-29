import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(process.cwd(), 'test-results');

function luminance(r, g, b) {
  // sRGB luminance approximation 0..255
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

async function analyzePng(file) {
  const img = sharp(file);
  const { width, height } = await img.metadata();
  // Read only top 220px rows to estimate header height quickly
  const sampleH = Math.min(220, height || 220);
  const raw = await img.extract({ left: 0, top: 0, width, height: sampleH }).raw().ensureAlpha().toBuffer();
  const channels = 4;
  const rowAvg = [];
  for (let y = 0; y < sampleH; y++) {
    let sum = 0;
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = raw[i], g = raw[i + 1], b = raw[i + 2];
      sum += luminance(r, g, b);
    }
    rowAvg.push(sum / width);
  }
  // Smooth averages
  const smooth = rowAvg.map((v, i, arr) => {
    const a = Math.max(0, i - 2);
    const b = Math.min(arr.length, i + 3);
    const slice = arr.slice(a, b);
    return slice.reduce((s, x) => s + x, 0) / slice.length;
  });
  // Detect significant luminance drop (white-ish header to darker hero)
  const topAvg = smooth.slice(0, 20).reduce((s, v) => s + v, 0) / Math.min(20, smooth.length); // ~header region
  let headerHeight = null;
  for (let y = 10; y < smooth.length; y++) {
    const diff = topAvg - smooth[y];
    if (diff > 40) { // threshold
      headerHeight = y;
      break;
    }
  }
  return { file, width, height, headerHeight };
}

async function main() {
  const files = [];
  const walk = async (dir) => {
    const list = await fs.readdir(dir, { withFileTypes: true });
    for (const d of list) {
      const p = path.join(dir, d.name);
      if (d.isDirectory()) await walk(p);
      else if (d.isFile() && p.endsWith('.png')) files.push(p);
    }
  };
  await walk(root);
  files.sort();
  console.log(`# Found ${files.length} PNG files under ${root}`);
  const results = [];
  for (const f of files) {
    try {
      const r = await analyzePng(f);
      results.push(r);
    } catch (e) {
      console.log('Failed to analyze', f, e.message);
    }
  }
  const summary = {};
  for (const r of results) {
    const rel = path.relative(root, r.file);
    summary[rel] = { width: r.width, height: r.height, headerHeight: r.headerHeight };
  }
  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
