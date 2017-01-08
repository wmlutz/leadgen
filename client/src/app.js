angular.module('obviapp', ['ngRoute', 'ngResource'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
            .html5Mode({
                enabled: true,
                requireBase: false
            });
    }]);
