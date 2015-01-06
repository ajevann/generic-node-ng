'use strict';

var Config = require('../config'),
    Logger = require('../utils').Logger;

module.exports.init = function (server, router) {
  router.get('*', function (req, res) {
    req.session['ipAddress'] = (req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress);

    Logger.log(Logger.INFO,
      'router',
      'get("/")',
      'visit',
      req.session['ipAddress']);
    res.render('app', { version: Config.VERSION });
  });

  server.use(router);
};