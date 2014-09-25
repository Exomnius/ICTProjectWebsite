'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.main',
  'myApp.leden',
  'myApp.verslagen'
]).
config(['$routeProvider', function($routeProvider) {

// define default route
  $routeProvider.otherwise({redirectTo: '/'});
}]);
