/**
    @file This is the testing script for this exercise. It utilizes Mocha for testing.
**/


/**
    define constants utilized to reference script locations
**/
process.env.src_root = __dirname + "/../src";
process.env.test_env_root = __dirname + "/_env"

/**
    define testing dependencies
**/
const assert = require("assert");


/**
    define utility tests
**/
describe('functionality', function(){
    it('should initialize', function(){
        var {require: this_require, define: this_define} = require(process.env.src_root + "/index.js");
        assert.equal(typeof this_require, "function", "require should be a function");
        assert.equal(typeof this_define, "function", "define should be a function");
    })
    it('should throw error if undefined key requested', function(){
        var {require: this_require, define: this_define} = require(process.env.src_root + "/index.js");
        try {
            this_require("test_key");
            throw new Error("should never reach here");
        } catch(error){
            assert.equal(error.message, "Key not defined in cache.");
        }
    })
    it('should be able to define and require constants', function(){
        var {require: this_require, define: this_define} = require(process.env.src_root + "/index.js");
        this_define('a_constant', 10);
        var result = this_require('a_constant');
        assert.equal(result, 10, "result should be expected");
    });
    it('should be able to define and require object', function(){
        var {require: this_require, define: this_define} = require(process.env.src_root + "/index.js");
        this_define('an_object', {foo:"bar"});
        var result = this_require('an_object');
        assert.equal(JSON.stringify(result), '{"foo":"bar"}', "result should be expected");
    });
    it('should be able to define and require function', function(){
        var {require: this_require, define: this_define} = require(process.env.src_root + "/index.js");
        this_define('a_function', (a,b)=>a+b);
        var result = this_require('a_function');
        assert.equal(result(2,2), 4, "result should be expected");
        assert.equal(result(4,5), 9, "result should be expected");
    });
})
