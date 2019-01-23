const LOG = require('signale');
const uuidv4 = require('uuid/v4');


module.exports = {
    info
}


function info() {
    LOG.debug("Running...." );
    LOG.info( `UUID v4:  ${uuidv4()}`);
    LOG.success( 'Done');    
}

