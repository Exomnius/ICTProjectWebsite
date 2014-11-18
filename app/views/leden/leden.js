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
		cvUrl: 'arno-cv/index.html',
		functie: false
	},
	{
		naam: 'Bloemen',
		voornaam: 'Martijn',
		richting: 'RICHTING_SWM',
		foto: 'martijn.jpg',
		cvUrl: false,
		functie: false
	},
	{
		naam: 'Decuypere',
		voornaam: 'Bram',
		richting: 'RICHTING_AON',
		foto: 'bram.jpg',
		cvUrl: false,
		functie: false
	},
	{
		naam: 'Janssen',
		voornaam: 'Cornel',
		richting: 'RICHTING_AON',
		foto: 'cornel.jpg',
		cvUrl: 'cornel-cv/index.html',
		functie: 'FUNCTIE_CO_LEIDER'
	},
	{
		naam: 'Sarkisjan',
		voornaam: 'Sevak',
		richting: 'RICHTING_SWM',
		foto: 'sevak.jpg',
		cvUrl: false,
		functie: false
	},
	{
		naam: 'Thoelen',
		voornaam: 'Nick',
		richting: 'RICHTING_AON',
		foto: 'nick.jpg',
		cvUrl: 'nick-cv/index.html',
		functie: 'FUNCTIE_EPOS_BB'
	},
	{
		naam: 'Aerts',
		voornaam: 'Mathias',
		richting: 'RICHTING_SNB',
		foto: 'mathias.jpg',
		cvUrl: false,
		functie: 'FUNCTIE_SECRETARIS'
	},
	{
		naam: 'Telen',
		voornaam: 'Tim',
		richting: 'RICHTING_SNB',
		foto: 'tim.jpg',
		cvUrl: false,
		functie: 'FUNCTIE_LEIDER'
	},
	{
		naam: 'Neyens',
		voornaam: 'Peter',
		richting: 'RICHTING_AON',
		foto: 'peter.jpg',
		cvUrl: false,
		functie: 'FUNCTIE_TEMP'
	}
	];

	$scope.leden = leden.map(function(lid){
		lid.cv = cvFolderPath + lid.cv;
		lid.foto = fotoFolderPath + lid.foto;
		return lid;
	});

}]);