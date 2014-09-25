'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', function($scope) {

	$scope.pageHeading = "Welcome to landing page for team awesome";
	$scope.pageSubtitle = "Now go fuck yourself.";



}]);