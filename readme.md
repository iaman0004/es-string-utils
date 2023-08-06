### ES String Utils 
[![NPM][npm-shield]][npm-url]

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
import { containsAnyIgnoreCase, capitalize } from 'es-string-utils';

const contains = containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const capitalizedText = capitalize('capitalize This strinG'); //Capitalize This String
```

**Usage with plain old javascript**
```js
const stringUtils = require('es-string-utils');

const contains = stringUtils.containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const capitalizedText = stringUtils.capitalize('capitalize This strinG'); //Capitalize This String
```

### Author
- [Aman Sharma](https://github.com/iaman0004)

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- MARKDOWN LINKS & IMAGES -->
[npm-shield]: https://img.icons8.com/color/48/npm.png
[npm-url]: https://www.npmjs.com/package/es-string-utils
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/iaman0004/