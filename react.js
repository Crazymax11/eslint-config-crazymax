module.exports = {
  plugins: ['react-hooks', 'react'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
