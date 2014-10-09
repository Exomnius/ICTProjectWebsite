'use strict';

angular.module('myApp.verslagen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/verslagen', {
		templateUrl: 'views/verslagen/verslagen.html',
		controller: 'VerslagenCtrl'
	});
}])

.controller('VerslagenCtrl', ['$scope', function($scope) {

	var folderPath = 'documenten/verslagen/';
	var verslagen = [
	{
		title: 'Eerste bespreking',
		date: '17/09/2014',
		file: '1.txt'
	},
	{
		title: 'Eerste contactmoment',
		date: '24/09/2014',
		file: '2.txt'
	}
	];

	$scope.verslagen = verslagen.map(function(verslag){
		verslag.file = folderPath + verslag.file;
		return verslag;
	});


}]);