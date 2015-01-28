'use strict';

angular.module('myApp.verslagen', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/verslagen', {
			templateUrl: 'views/verslagen/verslagen.html',
			controller: 'VerslagenCtrl'
		});
	}])

	.controller('VerslagenCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {

		var folderPath = 'documenten/verslagen/';
		var verslagen = [
			{
				title: 'Verslag 01',
				date: '10/12/2014',
				file: '01_Verslag_GROEP10.docx'
			},
			{
				title: 'Verslag 02',
				date: '17/12/2014',
				file: '02_Verslag_GROEP10.docx'
			},
			{
				title: 'Verslag 03',
				date: '07/01/2015',
				file: '03_Verslag_GROEP10.docx'
			},
			{
				title: 'Verslag 04',
				date: '12/01/2015',
				file: '04_Verslag_GROEP10.docx'
			},
			{
				title: 'Verslag 05',
				date: '15/01/2015',
				file: '05_Verslag_GROEP10.docx'
			},
			{
				title: 'Verlag 06',
				date: '19/01/2015',
				file: '06_Verslag_GROEP10.docx'
			}
		];

		if(!$rootScope.isLoggedIn) {
			$location.path("/login");
		}

		$scope.verslagen = verslagen.map(function(verslag){
			verslag.file = folderPath + verslag.file;
			return verslag;
		});





	}]);