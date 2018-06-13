## Overview

This exercise programatically simulates the actions of a user interacting with a web service. The users interface is presumed to be a console (e.g., a terminal).  In this implementation, the output is displayed on the left, and the status of the simulation is displayed on the right.

The solution uses es6 syntax, JSDoc style documentations, and Mocha.js for test cases.  

Example:
![screenshot_2018-06-13_01-48-42](https://user-images.githubusercontent.com/10381896/41332576-6478b3f6-6eac-11e8-8ac6-d6e819a8b1b9.png)


## Usage

#### Serverless Usage
Please run the following JSFiddle for the simple evaluation of this exercise: https://jsfiddle.net/uladkasach/25v8pqwc/21/

*Note: all the js on JSFiddle was merged to one page, as JSFiddle does not deal with file structures. This is different from the structure found in the source repository here.*

#### Manual Usage
The code can be additionally run manually be serving the index.html file. Running `npm start` will start an http-server which serves the content at `localhost:8080`.

*Note, to conduct this command you will first need to run `npm install`*

## Testing
Test coverage was produced utilizing the `mocha` module. The testing scripts are available under `/test`. Running the `npm test` command will conduct all of the tests.

![screenshot_2018-06-13_02-01-29](https://user-images.githubusercontent.com/10381896/41332937-b9307504-6ead-11e8-8c95-b5c503bbf02d.png)


## Documentation
The code in this repository was written with JSDoc formatted documentation. Running the `npm run doc` command will generate a website containing documentation for all of the content.

This documentation can be seen at the following address: https://rawgit.com/uladkasach/programming-exercises/master/set_one/exercise_one/docs/index.html

## Comments
1. This exercise did not utilize ES6 imports as
    1. JSFiddle (target environment) does not support file structures and thus we can not use relative imports
    2. Node.js (used for testing) does not natively support ES6 imports yet, and the complexity of this code does not warrant adding babel to the work flow.
2. This exercise was created with a multi-file structure for readability and testability
    - Testing utilizes Node.js and the Mocha package
3. The `user_id` for which we retrieve data in the simulation is a constant as the focus of the prompt was not on user interfaces but interacting with servers
