'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/main/main.html',
		controller: 'MainCtrl'
	});
}])

.controller('MainCtrl', ['$scope', '$translate', function($scope, $translate) {
	


}]);