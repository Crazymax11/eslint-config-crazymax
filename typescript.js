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

        /**
         * для работы react-docgen-typescript с .tsx компонентами
         * подходят не все экспорты.
         * @see https://github.com/strothj/react-docgen-typescript-loader#exporting-components
         * @see https://github.com/strothj/react-docgen-typescript-loader/issues/75
         * TODO: Написать свое правило?
         */
        'import/prefer-default-export': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
