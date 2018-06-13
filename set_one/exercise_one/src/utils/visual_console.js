/**
    Visual Console Module
    @module utils/visual_console
    @see utils/visual_console.js
**/

/**
    Creates a Virtual Console object

    @constructor
    @param {DOM} output_holder - the DOM element where output should be appended.
    @property output_holder - which DOM element to output logs to

    @description
    This module is responsible for creating a simple to use interface for logging to an arbitrary "visual console".
    In practice, it simply appends text elements with whatever content is wished to be logged to a predetermined DOM element.

    @example
const Visual_Console = require("/utils/visual_console");
const visual_console = new Visual_Console(dom.querySelector("#console_output_holder"));
visual_console.log("statement to log") // appends "statement to log" to the visual console
**/

class Visual_Console {
    constructor(output_holder) {
        this.output_holder = output_holder;
    }
    /**
        Write a string to the virtual console; purposely mimics the `console.log` syntax
    **/
    log(output){
        var text_element = window.document.createElement("p"); // create a new text element to hold the output; note, `window.document` (rather than just `document`) is used to support node.js env testing
        text_element.innerHTML = output; // define the content of the text element; allow html formatting
        this.output_holder.appendChild(text_element); // add the text element to the output
    }
}

/** Export the module formally for Common.js environment, if we are in it **/
if(typeof module != "undefined" && typeof require != "undefined"){
    module.exports = Visual_Console;
}
