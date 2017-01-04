angular.module("obviapp").directive('navBar', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "/../src/templates/navBar.html",
    controller: function($scope, $location){
      console.log("outputting: " + templateUrl);
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
