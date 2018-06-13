## Overview

This exercise consists of the implementation of a very simple RequireJS-style module loader.

***Note:*** This exercise was similar in concept to a project I had already done, implementing the a Node.js style `require()` statement in the browser to enable the usage of NPM modules (CommonJS format) in the browser. Please see the [`clientside-require`](https://github.com/uladkasach/clientside-require) project to see a thorough implementation of this functionality with full test coverage.

## Usage

#### Installation
To use the simplistic module loader, please import the `src/index.js` script into your project. This solution supports both CommonJS syntax imports and classic `<script>` imports.

The following content will assume that you have already imported the script into your working environment.

#### Defining
To define a module to later use in your code, utilize the `define` method. The `define` method expects two parameters: `module_name` and `target_function`.
- `module_name` will be used to index the function provided by `target_function`.
- `target_function` will be the object (e.g., function, class, etc) that is returned by the simplistic module loader, for the given `module_name`  

For example:
```js
define('difference', (a, b)=> a - b);
```

#### Requiring

To retrieve a module to use in your code, utilize the `require` method. The `require` method expects one parameter: `module_name`. It retrieves the object (e.g., function, class, etc) that has been defined for the given `module_name`.

For example:
```js
const difference = require('difference');
difference(9, 3) // returns 6
```

## Testing
Test coverage was produced utilizing the `mocha` module. The testing scripts are available under `/test`. Running the `npm test` command will conduct all of the tests.
![screenshot_2018-06-13_03-04-58](https://user-images.githubusercontent.com/10381896/41335386-a02d6342-6eb6-11e8-8835-8cfb991703d0.png)


## Documentation
The code in this repository was written with JSDoc formatted documentation. Running the `npm run doc` command will generate a website containing documentation for all of the content.

This documentation can be seen at the following address: https://rawgit.com/uladkasach/programming-exercises/master/set_one/exercise_two/docs/index.html
