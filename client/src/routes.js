angular.module('obviapp').config(function($routeProvider){
  $routeProvider
  // .when('/', {
  //   redirectTo: '/login'
  // })
  .when('/login', {
    templateUrl: '/src/templates/login/index.html',
    // controller: 'LoginController'
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
