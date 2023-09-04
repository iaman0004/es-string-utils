### ES String Utils 
[![NPM][npm-shield]][npm-url]

[![NPM Version](https://img.shields.io/npm/v/es-string-utils.svg?branch=master)](https://www.npmjs.com/package/es-string-utils)
[![License](https://img.shields.io/npm/l/es-string-utils.svg)](https://github.com/iaman0004/es-string-utils/blob/master/LICENSE)

A collection of utility functions which Javascript/Typescript misses for string manipulation in javascript and typescript.

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
import * as esStringUtils from 'es-string-utils';

const contains = containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const capitalizedText = capitalize('capitalize This strinG'); //Capitalize This String

const concatenated = esStringUtils.concat('homelander', ' leader o', 'f V7'); //homelander leader of V7
```

**Usage with plain old javascript**
```js
const stringUtils = require('es-string-utils');

const contains = stringUtils.containsAnyIgnoreCase('This is the source string', 'tocheck'); //false

const capitalizedText = stringUtils.capitalize('capitalize This strinG'); //Capitalize This String
```

### Available Methods
* [camelize](utils/camelize.ts)
* [capitalize](utils/capitalize.ts)
* [compare](utils/compare.ts)
* [concat](utils/concat.ts)
* [contains](utils/contains.ts)
* [containsIgnoreCase](utils/containsAnyIgnoreCase.ts)
* [containsAny](utils/containsAny.ts)
* [containsAnyIgnoreCase](utils/containsAnyIgnoreCase.ts)
* [containsNone](utils/containsNone.ts)
* [containsOnly](utils/containsOnly.ts)
* [countMatches](utils/countMatches.ts)
* [deleteChars](utils/deleteChars.ts)
* [endsWithAny](utils/endsWithAny.ts)
* [endsWithIgnoreCase](utils/endsWithAnyIgnoreCase.ts)
* [equals](utils/equals.ts)
* [equalsAny](utils/equalsAny.ts)
* [equalsAnyIgnoreCase](utils/equalsAnyIgnoreCase.ts)
* [equalsIgnoreCase](utils/equalsIgnoreCase.ts)
* [isAllBlank](utils/isAllBlank.ts)

**many more on the way**

### Contributors ✨
- [Aman Sharma](https://github.com/iaman0004)

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- MARKDOWN LINKS & IMAGES -->
[npm-shield]: https://img.icons8.com/color/48/npm.png
[npm-url]: https://www.npmjs.com/package/es-string-utils
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/iaman0004/