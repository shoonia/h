import { join } from 'path';
import { emptyDirSync, outputJSONSync } from 'fs-extra';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const entry = 'src/index.js';

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
  private: true,
  license: 'MIT',
};

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
    input: entry,
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
    plugins: [
      replace({
        preventAssignment: true,
        __DEV__: JSON.stringify(false),
      }),
    ],
  },
  {
    input: entry,
    output: [
      {
        file: join('dev', dist, 'index.js'),
        format: 'cjs',
      },
    ],
    plugins: [
      replace({
        preventAssignment: true,
        __DEV__: JSON.stringify(true),
      }),
    ],
  },
];
