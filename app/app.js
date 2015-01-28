'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
	'ngRoute',
	'myApp.main',
	'myApp.leden',
	'myApp.verslagen',
	'myApp.login',
	'pascalprecht.translate'
	]);

myApp.config(['$routeProvider', function($routeProvider) {

	// define default route
	$routeProvider.otherwise({redirectTo: '/'});

}]);

myApp.controller('navCtrl', ['$scope', '$location', '$translate','$rootScope', function($scope, $location, $translate, $rootScope) {
	
	$scope.changeLanguage = function (langKey) {
		$translate.use(langKey);
	};

	$rootScope.isLoggedIn = false;

	$scope.isActive = function(path) {
		if ($location.path().length == path.length && $location.path().substr(0, path.length) == path) {
			return true;
		} else {
			return false;
		}
	}

	$scope.logout = function() {
		$rootScope.isLoggedIn = false;
	}

}]);


myApp.config(['$translateProvider', function ($translateProvider) {

	var features = {};
	var general = {};

	features['nl'] = {
		FEATURE_0_TITLE: 'Consultaties',
		FEATURE_0_DESCRIPTION: 'De arts ziet onmiddelijk een overzicht van de laatse consultaties en kan gelijk beginnen typen in een nieuwe consultatie.',
		FEATURE_0_IMAGE: 'images/feature.gif',
		FEATURE_1_TITLE: 'Journaal',
		FEATURE_1_DESCRIPTION: 'De arts houdt een journaal bij voor elke pacient. De inhoud van dit journaal is prive, en enkel bedoeld voor de arts.',
		FEATURE_1_IMAGE: 'images/feature.gif',
		FEATURE_2_TITLE: 'Detail informatie',
		FEATURE_2_DESCRIPTION: 'Voor elke pacient moeten een aantal belangrijke gegevens bewaard kunnen worden zoals: allergieen, bloeddruk, medicatie en vaccinaties.',
		FEATURE_2_IMAGE: 'images/feature.gif',
		FEATURE_3_TITLE: 'Beveiliging',
		FEATURE_3_DESCRIPTION: 'De overheid laat het tot nu toe niet toe om medische gegevens van klanten te verwisselen op een netwerk dat met het internet is verbonden. Om deze beperking te omzeilen laten wij de patienten een document elektronisch tekenen adhv hun eID.',
		FEATURE_3_IMAGE: 'images/feature.gif',
	};

	features['en'] = {
		FEATURE_0_TITLE: 'Consultations',
		FEATURE_0_DESCRIPTION: 'The doctor will see an immediate overview of last consultations and can immediately start typing in a new consultation. ',
		FEATURE_0_IMAGE: 'images/feature.gif',
		FEATURE_1_TITLE: 'News',
		FEATURE_1_DESCRIPTION: 'The doctor keeps a journal for each pacient. The content of this journal is private and intended only for the physician. ',
		FEATURE_1_IMAGE: 'images/feature.gif',
		FEATURE_2_TITLE: 'Detailed information',
		FEATURE_2_DESCRIPTION: 'For every pacient some important data must be stored as: allergies, blood pressure, medications and vaccinations.',
		FEATURE_2_IMAGE: 'images/feature.gif',
		FEATURE_3_TITLE: 'Security',
		FEATURE_3_DESCRIPTION: 'The government leaves it up to now not to switch to a network that is connected to the Internet medical information from customers. To circumvent this limitation we have patients sign a document electronically adhv their eID. ',
		FEATURE_3_IMAGE: 'images/feature.gif',
	};

	features['fr'] = {
		FEATURE_0_TITLE: 'Consultations',
		FEATURE_0_DESCRIPTION: 'Le médecin voir un aperçu immédiat de dernières consultations et peut immédiatement commencer à taper dans une nouvelle consultation. ',
		FEATURE_0_IMAGE: 'images/feature.gif ',
		FEATURE_1_TITLE: 'Nouvelles ',
		FEATURE_1_DESCRIPTION: 'Le médecin tient un journal pour chaque pacient. Le contenu de ce journal est privé et destiné uniquement pour le médecin. ',
		FEATURE_1_IMAGE: 'images/feature.gif ',
		FEATURE_2_TITLE: 'Informations détaillées ',
		FEATURE_2_DESCRIPTION: 'Pour chaque pacient des données importantes doivent être stockées en tant que: allergies, l\'hypertension, les médicaments et les vaccins. ',
		FEATURE_2_IMAGE: 'images/feature.gif ',
		FEATURE_3_TITLE: 'Sécurité ',
		FEATURE_3_DESCRIPTION: 'Le gouvernement laisse pas jusqu\'à présent pour basculer sur un réseau qui est connecté à l\'Internet les renseignements médicaux de clients. Pour contourner cette limitation, nous avons des patients signent un document par voie électronique adhv leur eID. ',
		FEATURE_3_IMAGE: 'images/feature.gif ',
	};



	
	general['nl'] = {
		NAV_PROJECT: 'Project',
		NAV_VERSLAGEN: 'Verslagen',
		NAV_VOORSTELLING: 'Voorstelling van leden',
		NAV_LOGIN: 'Log In',
		NAV_LOGOUT: 'Log Uit',
		SITE_TITLE: 'Future family medicine',
		SITE_SUBTITLE: 'De applicatie voor de moderne huisarts.',
		SITE_DESC_TITLE: 'Project omschrijving',
		SITE_DESC: 'Huisartsen maken momenteel veel gebruik van verouderde applicaties die niet gebruiksvriendelijk of efficient zijn. Wij gaan hier verandering in brengen door een applicatie te bouwen die het werk van de huisarts zo veel mogelijk vergemakelijkt. Het is ons doel om een intuitieve interface te maken waar de arts met 1 oogopslag al de belangrijke informatie heeft gezien en onmiddelijk de nodige taken kan uitvoeren. Beneden ziet u de voornaamste functies van de applicatie.',
		RICHTING: 'Richting',
		FUNCTIE: 'Functie',
		RICHTING_AON: 'Applicatieontwikkeling',
		RICHTING_SNB: 'Systemen en netwerkbeheer',
		RICHTING_SWM: 'Softwaremanagement',
		FUNCTIE_LEIDER: 'Projectleider',
		FUNCTIE_CO_LEIDER: 'Co-Projectleider',
		FUNCTIE_SECRETARIS: 'Secretaris',
		FUNCTIE_EPOS_BB: 'Epos/BB verantwoordelijke',
		ZOEKEN: 'Zoeken',
		FUNCTIE_TEMP: 'Is in Special Topics team',
	}

	general['en'] = {
		NAV_PROJECT: 'Project',
		NAV_VERSLAGEN: 'Reports',
		NAV_VOORSTELLING: 'Presentation of members',
		NAV_LOGIN: 'Sign In',
		NAV_LOGOUT: 'Sign Out',
		SITE_TITLE: 'Future family medicine',
		SITE_SUBTITLE: 'The application for the modern practitioner.',
		SITE_DESC_TITLE: 'Project Description',
		SITE_DESC: 'GPs currently use lots of legacy applications that are not user-friendly or efficient are. We are going to change this by building the work of the practitioner shall make seems as much an application. It is our goal to make the Doctor all the important information first glance seen immediately and can perform. Necessary tasks intuitive interface Below shows the main features of the application. ',
		RICHTING: 'Direction',
		FUNCTIE: 'Function',
		RICHTING_AON: 'Application Development',
		RICHTING_SNB: 'Systems and management',
		RICHTING_SWM: 'Software Management',
		FUNCTIE_LEIDER: 'Project Leader',
		FUNCTIE_CO_LEIDER: 'Co-Project Leader',
		FUNCTIE_SECRETARIS: 'Secretary',
		FUNCTIE_EPOS_BB: 'Epos / BB controller',
		ZOEKEN: 'Search',
		FUNCTIE_TEMP: 'Is in Special Topics team',
	}

	general['fr'] = {
		NAV_PROJECT: 'Projet ',
		NAV_VERSLAGEN: 'Rapports ',
		NAV_VOORSTELLING: 'Présentation des membres ',
		NAV_LOGIN: 'Connexion',
		NAV_LOGOUT: 'Déconnexion',
		SITE_TITLE: 'Future family medicine',
		SITE_SUBTITLE: 'L\'application pour le praticien moderne. ',
		SITE_DESC_TITLE: 'Description du projet ',
		SITE_DESC: 'Médecins utilisent actuellement beaucoup d\'applications existantes qui ne sont pas ou sont efficace et facile à utiliser. Nous allons changer cela en construisant le travail du praticien doit faire semble autant une application. Notre objectif est de faire le médecin toutes les informations importantes premier coup d\'œil immédiatement visible et peut effectuer. Tâches nécessaires interface intuitive ci-dessous présente les principales fonctionnalités de l\'application. ',
		RICHTING: 'Direction ',
		FUNCTIE: 'Fonction ',
		RICHTING_AON: 'Développement d\'applications ',
		RICHTING_SNB: 'Systèmes de gestion et ',
		RICHTING_SWM: 'Logiciels de gestion ',
		FUNCTIE_LEIDER: 'Chef de projet ',
		FUNCTIE_CO_LEIDER: 'Co-Chef de projet ',
		FUNCTIE_SECRETARIS: 'Secrétaire ',
		FUNCTIE_EPOS_BB: 'Contrôleur de Epos / BB ',
		ZOEKEN: 'Recherche',
		FUNCTIE_TEMP: 'Is in Special Topics team',
	}

	$translateProvider.translations('en', general['en']);
	$translateProvider.translations('nl', general['nl']);
	$translateProvider.translations('fr', general['fr']);

	$translateProvider.translations('en', features['en']);
	$translateProvider.translations('nl', features['nl']);
	$translateProvider.translations('fr', features['fr']);

	$translateProvider.preferredLanguage('nl');

}]);
