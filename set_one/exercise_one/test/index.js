/**
    @file This is the testing script for this exercise. It utilizes Mocha for testing.
**/


/**
    @global
    @description provision the environment with a global `window` object to mimic the browser environment; this is required for certain tests
**/
global.window = new (require("jsdom")).JSDOM('').window; // creates a window object with .document, .console, etc

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
describe('utils', function(){
    /** Test the Visual_Console utility **/
    describe('visual_console', function(){
        it('should be loadable', ()=>{
            let Visual_Console = require(process.env.src_root + "/utils/visual_console.js"); // get the visual console
        })
        it('it should be initializable', ()=>{
            let Visual_Console = require(process.env.src_root + "/utils/visual_console.js"); // get the visual console
            let visual_console = new Visual_Console(window.document.createElement("div")); // it should be able to initialize given an empty div
        })
        it('it should be able to write to visual console', ()=>{
            let Visual_Console = require(process.env.src_root + "/utils/visual_console.js"); // get the visual console
            let console_output_holder = window.document.createElement("div"); // create a blank element
            let visual_console = new Visual_Console(console_output_holder); // it should be able to initialize given an empty div
            visual_console.log("test"); // log a test output
            assert.equal(console_output_holder.outerHTML, "<div><p>test</p></div>", "content of console_output_holder should be expected"); // it should find expected content in output
        })
    })
    describe('api', function(){
        it('should be loadable', ()=>{
            let api = require(process.env.src_root + "/utils/api.js"); // get the api
        })
        it('should be able to load user data', async ()=>{
            let api = require(process.env.src_root + "/utils/api.js"); // get the api
        	let user_data = await api.retreive_user(1); // retreive data from server
            let keys = Object.keys(user_data);
            assert.equal(JSON.stringify(keys), '["meta","posts","albums","todos"]', "keys must be expected");
        })
        it('should be able to load post data', async ()=>{
            let api = require(process.env.src_root + "/utils/api.js"); // get the api
        	let post_data = await api.retreive_post(1); // retreive data from server
            let keys = Object.keys(post_data);
            assert.equal(JSON.stringify(keys), '["userId","id","title","body","comments"]', "keys must be expected");
        })
        it('should be able to post a comment', async ()=>{
            let api = require(process.env.src_root + "/utils/api.js"); // get the api
        	let response = await api.post_comment(1, "test comment"); // retreive data from server
            let keys = Object.keys(response);
            assert.equal(JSON.stringify(keys), '["body","id"]', "keys must be expected");
        })
    })

})
