module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules: {
    'jest/no-test-callback': 'error',
  },
};
