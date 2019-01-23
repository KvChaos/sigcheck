const LOG = require('signale');
const uuidv4 = require('uuid/v4');



LOG.debug("Running...." );
LOG.info( `UUID v4:  ${uuidv4()}`);
LOG.success( 'Done');