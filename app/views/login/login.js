'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {


        $scope.isLoginPage = true;

        $scope.credentials = {
            username: '',
            password: ''
        };

        $scope.login = function (inputIsValid, credentials) {

            if (!inputIsValid) {
                $scope.message = "Geef eerst de nodige gegevens in.";
                return;
            }

            if (inputIsValid && credentials.password != "Google" && credentials.email != "bart.moelans@pxl.be") {
                $scope.message = "U heeft niet de juiste credentials om in te loggen";
            }

            if (inputIsValid && credentials.password == "Google" && credentials.email == "bart.moelans@pxl.be") {
                $rootScope.isLoggedIn = true;
                //alert('test');
                $location.path("/verslagen");
            }


        };

    }]);


