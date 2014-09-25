'use strict';

angular.module('myApp.leden', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leden', {
    templateUrl: 'views/leden/leden.html',
    controller: 'LedenCtrl'
  });
}])

.controller('LedenCtrl', [function() {

}]);