'use strict';

var express = require('express'),
    server  = express(),
    api     = require('./api'),
    Config  = require('./config'),
    router  = express.Router(),
    routes  = require('./routes'),
    sequelize;

Config.init(server);
api.init(server);
routes.init(server, router);

module.exports = server;