'use strict';

var app = angular.module('genericApp', ['ngRoute']);

// require('./directives');
require('./controllers');

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {
      templateUrl: '/views/landing.html',
      controller: 'LandingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});