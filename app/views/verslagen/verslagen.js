'use strict';

angular.module('myApp.verslagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/verslagen', {
    templateUrl: 'views/verslagen/verslagen.html',
    controller: 'VerslagenCtrl'
  });
}])

.controller('VerslagenCtrl', [function() {

}]);