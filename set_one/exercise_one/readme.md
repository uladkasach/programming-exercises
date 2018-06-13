## Overview

This exercise programatically simulates the actions of a user interacting with a web service. The output is displayed on the left, and the status of the simulation is displayed on the right.

The users interface is presumed to be a console (e.g., a terminal). Thus, the display is styled to look like a terminal console.

Example:


## Usage

#### Serverless Usage
Please run the following JSFiddle for the simple evaluation of this exercise:
*The JS fiddle sources the content from this github repository using `rawgit.com`*

#### Manual Usage
The code can be additionally run manually be serving the index.html file. Running `npm start` will start an http-server which serves the content at `localhost:8080`

## Testing
Maximal test coverage was produced with this code utilizing the `mocha` module. The testing scripts are available under `/test`. Running the `npm test` command will conduct all of the tests.

## Documentation
The code in this repository was written with JSDom formatted documentation. Running the `npm run doc` command will generate a website containing documentation for all of the content.

This documentation can be seen at the following address:

## Comments
1. This exercise did not utilize ES6 imports as
    1. JSFiddle (target environment) does not support file structures and thus we can not use relative imports
    2. Node.js (used for testing) does not natively support ES6 imports yet, and the complexity of this code does not warrant adding babel to the work flow.
2. This exercise was created with a multi-file structure for readability and testability
    - Testing utilizes Node.js and the Mocha package 
