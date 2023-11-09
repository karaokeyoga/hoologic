module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ['standard', 'plugin:react/recommended', 'plugin:perfectionist/recommended-natural', 'prettier', 'plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'perfectionist/sort-imports': ['error', { 'newlines-between': 'never' }],
    'prettier/prettier': ['error', { arrowParens: 'avoid', endOfLine: 'lf', printWidth: 160, semi: false, singleQuote: true, trailingComma: 'none' }],
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
