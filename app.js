'use strict';

var http   = require('http'),
    server = require('./server'),
    Utils  = require('./server/utils');

if (!module.parent) {
  http.createServer(server).listen(server.get('port'), function () {
    Utils.Logger.log(Utils.Logger.INFO, 'app', 'http.createServer',
      'Express server started listening on port: ' + server.get('port'));
  });
}