const uuidv4 = require('uuid/v4');

// Comment
module.exports = {
    info
}


function info() {
    console.log("Running....");
    console.log(`UUID v4:  ${uuidv4()}`);
    console.log('Done');
}
