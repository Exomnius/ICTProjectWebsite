'use strict';

angular.module('myApp.leden', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/leden', {
    templateUrl: 'views/leden/leden.html',
    controller: 'LedenCtrl'
  });
}])

.controller('LedenCtrl', ['$scope', function($scope) {
	
	var cvFolderPath = 'documenten/cvs/';
	var fotoFolderPath = 'images/leden/';

	var leden = [
	{
		naam: 'Van Waeyenberg',
		voornaam: 'Arno',
		richting: 'RICHTING_AON',
		foto: 'arno.jpg',
		cv: 'waeyenberg.txt',
		functie: null
	},
	{
		naam: 'Bloemen',
		voornaam: 'Martijn',
		richting: 'RICHTING_SWM',
		foto: 'martijn.jpg',
		cv: null,
		functie: null
	},
	{
		naam: 'Decuypere',
		voornaam: 'Bram',
		richting: 'RICHTING_AON',
		foto: 'bram.jpg',
		cv: 'decuypere.txt',
		functie: null
	},
	{
		naam: 'Janssen',
		voornaam: 'Cornel',
		richting: 'RICHTING_AON',
		foto: 'cornel.jpg',
		cv: 'janssen.txt',
		functie: 'FUNCTIE_CO_LEIDER'
	},
	{
		naam: 'Sarkisjan',
		voornaam: 'Sevak',
		richting: 'RICHTING_SWM',
		foto: 'sevak.jpg',
		cv: null,
		functie: null
	},
	{
		naam: 'Thoelen',
		voornaam: 'Nick',
		richting: 'RICHTING_AON',
		foto: 'nick.jpg',
		cv: 'thoelen.txt',
		functie: 'FUNCTIE_EPOS_BB'
	},
	{
		naam: 'Aerts',
		voornaam: 'Mathias',
		richting: 'RICHTING_SNB',
		foto: 'mathias.jpg',
		cv: null,
		functie: 'FUNCTIE_SECRETARIS'
	},
	{
		naam: 'Telen',
		voornaam: 'Tim',
		richting: 'RICHTING_SNB',
		foto: 'tim.jpg',
		cv: null,
		functie: 'FUNCTIE_LEIDER'
	}
	];

	$scope.leden = leden.map(function(lid){
		lid.cv = cvFolderPath + lid.cv;
		lid.foto = fotoFolderPath + lid.foto;
		return lid;
	});

}]);