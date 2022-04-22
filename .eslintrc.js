module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    'marine/prettier/node',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: ['**/bin/*', 'node_modules'],
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/prefer-ts-expect-error': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-namespace': 0,
    'no-use-before-define': 0,
    'no-redeclare': 0,
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single'],
  },
}
