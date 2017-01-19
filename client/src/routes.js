angular.module('obviapp').config(function($routeProvider){
  $routeProvider
  .when('/', {
  	templateUrl: '/src/templates/main/index.html'
  })
  .when('/info', {
    templateUrl: '/src/templates/info/index.html',
    controller: 'infoController'
  })
  .when('/leads', {
    templateUrl: '/src/templates/leads/index.html',
    // controller: 'LeadUploadController'
  })
  .when('/interaction', {
    templateUrl: '/src/templates/interaction/index.html',
    // controller: 'InteractionShowController'
  })
  .when('/review', {
    templateUrl: '/src/templates/review/index.html',
    // controller: 'ReviewController'
  });


});
