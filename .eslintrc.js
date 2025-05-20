module.exports = {
  root: true,
  extends: [
    '@react-native',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['module:@react-native/babel-preset'],
      configFile: './babel.config.js',
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};