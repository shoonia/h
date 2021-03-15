import { join } from 'path';
import { emptyDirSync, outputJSONSync } from 'fs-extra';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import libPkg from './package.json';

const dist = 'jsx-runtime';
const source = 'jsxRuntime.js';
const esm = 'jsxRuntime.esm.js';
const moduleJs = 'jsxRuntime.module.js';
const cjs = 'jsxRuntime.cjs.js';

const pkg = {
  name: dist,
  version: '1.0.0',
  description: 'JSX runtime',
  sideEffects: false,
  source,
  main: cjs,
  module: moduleJs,
  exports: `./${esm}`,
  esmodule: esm,
  types: '../index.d.ts',
  private: true,
  license: 'MIT',
};

const extensions = ['.js', '.ts'];

const plugins = [
  commonjs(),
  nodeResolve({
    extensions,
  }),
  babel({
    extensions,
    presets: [
      '@babel/preset-typescript',
    ],
  }),
];

const bablePlugin = getBabelOutputPlugin({
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: 'defaults',
      },
    ],
  ],
});

const terserPlugin = terser({
  module: true,
});

emptyDirSync(dist);
outputJSONSync(join(dist, 'package.json'), pkg, { spaces: 2 });

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: join(dist, source),
        format: 'esm',
      },
      {
        file: join(dist, esm),
        format: 'esm',
        plugins: [
          terserPlugin,
        ],
      },
      {
        file: join(dist, moduleJs),
        format: 'esm',
        plugins: [
          bablePlugin,
          terserPlugin,
        ],
      },
      {
        file: join(dist, cjs),
        format: 'cjs',
        plugins: [
          bablePlugin,
          terserPlugin,
        ],
      },
    ],
  },
  {
    input: 'src/lib/index.ts',
    output: [
      {
        file: libPkg.esmodule,
        format: 'esm',
      },
      {
        file: libPkg.module,
        format: 'esm',
        plugins: [
          bablePlugin,
        ],
      },
      {
        file: libPkg.main,
        format: 'cjs',
        plugins: [
          bablePlugin,
        ],
      },
    ],
    plugins,
  },
  {
    input: 'src/development/index.ts',
    output: [
      {
        file: 'jsx-dev-runtime/index.js',
        format: 'cjs',
      },
    ],
    plugins,
  },
];
