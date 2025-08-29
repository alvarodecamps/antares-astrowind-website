import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir, stat, rename } from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../src/assets/images');

const targets = [
  'hero-bg.jpg',
  'header-inicio.jpg',
  'header-soluciones.jpg',
  'header-portafolio.jpg',
  'header-sobre.jpg',
  'header-contacto.jpg',
  'about-us.jpg',
];

async function compressOne(file) {
  const input = path.join(imagesDir, file);
  try {
    const info = await stat(input);
    if (!info.isFile()) return;
  } catch {
    return; // Skip missing files
  }

  const outJpg = input; // overwrite original (backups in VCS)
  const outWebp = input.replace(/\.[^.]+$/, '.webp');
  const outAvif = input.replace(/\.[^.]+$/, '.avif');

  console.log(`Compressing: ${file}`);

  // Resize wide hero images to max width 1920 keeping aspect ratio
  const pipeline = sharp(input).resize({ width: 1920, withoutEnlargement: true });

  const tmpJpg = outJpg + '.tmp';
  await Promise.all([
    pipeline.jpeg({ quality: 72, progressive: true, mozjpeg: true }).toFile(tmpJpg),
    sharp(input).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 72 }).toFile(outWebp),
    sharp(input).resize({ width: 1920, withoutEnlargement: true }).avif({ quality: 45 }).toFile(outAvif),
  ]);
  await rename(tmpJpg, outJpg);
}

async function main() {
  for (const f of targets) {
    await compressOne(f);
  }
  console.log('Done. Consider switching imports to .webp or .avif for best performance.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
