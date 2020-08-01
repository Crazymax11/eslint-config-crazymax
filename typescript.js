module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      rules: {
        // Разработчик осознано ставит ts-ignore
        '@typescript-eslint/ban-ts-ignore': 'warn',
        // К сожалению, правило ругается на render методы и render функции, где указание типа никому не нужно
        // оно и так хорошо выводится
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true },
        ],
        // Плохо работает в тайпскрипте.
        // Даже если указать описание типов в JSDoc необязательным, правило все равно ругается
        'valid-jsdoc': 'off',

        'default-case': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/interface-name-prefix': 'off'
      },
    },
  ],
};
