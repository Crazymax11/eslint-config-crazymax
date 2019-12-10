module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'prettier', 'eslint-comments'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        quoteProps: 'as-needed',
        tabWidth: 2,
        printWidth: 100,
        // Подразумеваем, что наш код либо транспайлится, либо запускается в среде, где поддерживаются висящие запятые в функциях
        trailingComma: 'all',
      },
    ],
    'valid-jsdoc': [
      2,
      {
        prefer: {
          returns: 'return',
        },
        preferType: {
          String: 'string',
          Number: 'number',
          object: 'Object',
          array: 'Array',
          function: 'Function',
          Boolean: 'boolean',
          bool: 'boolean',
        },
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false,
      },
    ],

    // резолв сложно настраивается
    'import/no-unresolved': 'off',

    // без резолва будет лишний шум
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'import/order': 'error',

    'no-param-reassign': 'error',

    'class-methods-use-this': 'off',

    'no-unused-expressions': 0,

    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'max-statements': ['warn', 20],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'max-lines': ['warn'],
    'multiline-comment-style': 'off',
    'no-debugger': 'error',
    /*
     * используем деструктуризацию только при объявлений переменных и деструктуризации из объекта
     * По общему мнению, из массивов не должно быть обязательной деструктуризации
     * А когда переменная уже определена, то как-то тоже ожидается что она напрямую будет переписана
     * При это деструктуризация из объекта убирает дублирование кода
     * const offers = result.offers vs const { offers } = result;
     */
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    /*
     * Форсит фигурные скобки в циклах for, while, do и if/else, даже если в теле всего 1 инструкция
     * @see https://eslint.org/docs/2.0.0/rules/curly
     */
    curly: ['error', 'all'],
    // запрещает комменты на одной строчке с кодом
    'no-inline-comments': 'error',

    camelcase: 'error',
    'no-console': 'error',
  },
};
