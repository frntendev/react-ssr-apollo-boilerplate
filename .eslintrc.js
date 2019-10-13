const paths = require('./config/paths');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'wiremore',
    'wiremore/react',
    'wiremore/typescript',
  ],
  globals: {
    __BROWSER__: true,
    __SERVER__: true,
    __APOLLO_STATE__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: paths.resolveModules,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'react': {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
      },
    ],
    'security/detect-object-injection': 'off',
    'curly': [2, 'multi'],
  },
  plugins: ['react', 'prettier'],
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'import/named': 0,
        'react/prop-types': 0,
      },
    },
  ],
};
