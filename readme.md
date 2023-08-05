### ES String Utils

A collection of utility functions for string manipulation in javascript and typescript.

**Installation using `npm`**
```sh
npm install es-string-utils --save
```

**Installation using `yarn`**
```sh
yarn add es-string-utils
```

**Usage with es6 import**
```ts
import { containsAnyIgnoreCase, camelize } from 'es-string-utils';

const contains = containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const camelizedText = camelize('camelize This strinG'); //Camelize This String
```

**Usage with plain old javascript**
```js
const stringUtils = require('es-string-utils');

const contains = stringUtils.containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const camelizedText = stringUtils.camelize('camelize This strinG'); //Camelize This String
```
