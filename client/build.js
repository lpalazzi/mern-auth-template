const esbuild = require('esbuild');
const inlineImage = require('esbuild-plugin-inline-image');

const watchMode = process.argv[2] === '-w';

esbuild
  .build({
    entryPoints: ['./src/index.tsx'],
    outfile: '../public/bundle/app.js',
    minify: true,
    bundle: true,
    plugins: [inlineImage()],
    watch: watchMode
      ? {
          onRebuild(error, result) {
            if (error) console.error('watch build failed:', error);
          },
        }
      : null,
  })
  .catch(() => process.exit(1));
