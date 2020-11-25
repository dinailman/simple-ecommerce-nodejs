const path = require('path');

//course version
//module.exports = path.dirname(process.mainModule.filename);

//latest version
module.exports = path.dirname(require.main.filename);