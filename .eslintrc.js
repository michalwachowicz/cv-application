module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
  },
};
