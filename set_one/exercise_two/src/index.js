/**
    @constant

    define a singleton module loader cache object

    The module_loader_cache object will be used to SET and GET contents, like any other cache.
    The `require` method will use the `cache.get` method. the `define` method will use the `cache.set` method.
*/
const module_loader_cache = {
    /**
        @property __cache - the actual datatype that stores defined data
    */
    __cache : {},
    set(key, value){
        this.__cache[key] = value; // set the value into cache
    },
    get(key){
        if(typeof this.__cache[key] == "undefined") throw new Error("Key not defined in cache."); // throw error if key is not in cache
        return this.__cache[key];
    }
}

/**
    @constant define - define the define function as the module_loader_cache.set method
**/
const define = module_loader_cache.set.bind(module_loader_cache); // bind `module_loader_cache` as `this` in `module_loader_cache.set`


/**
    @constant require - define the require function as the module_loader_cache.get method
**/
const module_require = module_loader_cache.get.bind(module_loader_cache); // bind `module_loader_cache` as `this` in `module_loader_cache.get`
if(typeof require == "undefined"){ // for cases where require is not already defined (e.g., in browser)
    const require = module_require; // defien it
} else { // for cases where require is already defined (e.g., node.js)
    require = module_require; // overwrite it
}

/**
    Export the module formally for Common.js environment, if we are in it
**/
if(typeof module != "undefined" && typeof exports != "undefined" && typeof require != "undefined"){
    exports.define = define;
    exports.require = require;
}
