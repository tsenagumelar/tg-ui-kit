const { resolve } = require('node:path')
const rules = require('./rules')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    'plugin:storybook/recommended',
    'plugin:mdx/recommended',
    ...[
      '@vercel/style-guide/eslint/node',
      '@vercel/style-guide/eslint/typescript',
      '@vercel/style-guide/eslint/browser',
      '@vercel/style-guide/eslint/react',
    ].map(require.resolve),
  ],
  parserOptions: {
    project,
  },
  plugins: ['typescript-sort-keys', 'unused-imports'],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // add rules configurations here
  rules: {
    ...rules,
    'storybook/no-redundant-story-name': 'off',
  },
}
