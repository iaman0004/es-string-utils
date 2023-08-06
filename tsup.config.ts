import type { Options } from 'tsup';

const config: Options = {
  entry: ['index.ts'],
  dts: true,
  format: ['cjs', 'esm'],
  minify: true,
  treeshake: true
}

export default config;
