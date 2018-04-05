module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'semi': 0,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'quotes': 0,
    'no-unused-vars': 0
  },
  globals: {}
}
