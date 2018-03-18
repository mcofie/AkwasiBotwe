//Required route file is passed here
const baseRoutes = require('./app_route');

//This section exports route files to the main file -> server.js
module.exports = function(app, db) {
    baseRoutes(app, db);
    // Other route groups could go here, in the future
};