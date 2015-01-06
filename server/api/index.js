'use strict';

var api = {};

api.init = function (server) {
  server.set('api', api);
};

module.exports = api;