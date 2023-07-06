function sayHello(name){
    console.log(name);
    // console.log(window) 
    // window/document is not define.
    // window and document objects are parts of the browser env. With node we create another browser env
}



// 1. OS
// 2. File Sys
// 3. Events
// 4. HTTP


const logger = require('./logger.js');

logger.log();
console.log(module);