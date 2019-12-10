## eslint-config-crazymax

Opinionated eslint config. Поставляется несколько конфигов для различных случаев.

- `eslint-config-crazymax` - базовый конфиг, включающий в себя конфиг `airbnb` с правками, плагины `prettier`, `import`, `eslint-comments`
- `eslint-config-crazymax/react` - расширение, включающее в себя плагины `react`, `react-hooks`
- `eslint-config-crazymax/mocha` - расширение, включающее в себя плагин mocha
  @ `eslint-config-crazymax/jest` - расширение, включающее в себя плагин jest
- `eslint-config-crazymax/typescript` - расширение, включающее в себя плагин `@typescript-eslint`, а также `@typescript-eslint/parser`. Работает только для `.ts` и `.tsx` файлов из коробки

## Установка

Сначала ставим сам конфиг и его основные зависимости: тулзы, другие конфиги и плагины

```
npm i -D eslint-config-crazymax eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-eslint-comments eslint-plugin-prettier babel-eslint prettier
```

Установка дополнительных пакетов

- `react` - `npm i -D eslint-plugin-react eslint-plugin-react-hooks`
- `typescript` - `npm i -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser`
- `jest` - `npm i -D eslint-plugin-jest`
- `mocha` - `npm i -D eslint-plugin-mocha`

## Использование

Допустим я хочу только только основной конфиг конфиг, тогда будет достаточно написать в настройках eslint:

```
{
    extends: ['eslint-config-crazymax']
}
```

Если я хочу писать реакт компоненты на тайпрскрипте, то конфиг будет выглядеть следующим образом:

```js
{
    extends: ['eslint-config-crazymax', 'eslint-config-crazymax/react', 'eslint-config-crazymax/typescript']
}
```

## Мне не нравится конфиг

Переопредели неугодные правила на те. Например, можно переопределить секцию prettier.

```js
{
    extends: ['eslint-config-crazymax'],
    rules: {
        'prettier/prettier': 'error',
    }
}
```
