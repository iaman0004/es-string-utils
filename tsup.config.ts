import type { Options } from 'tsup';

const config: Options = {
  entry: ['index.ts'],
  dts: true,
  format: ['iife', 'cjs', 'esm'],
  minify: true,
  legacyOutput: true
}

export default config;
