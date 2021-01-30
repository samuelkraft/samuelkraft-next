module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0, // next-links require empty a tags
    'import/prefer-default-export': 0,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
