angular.module("obviapp").directive('obNavBar', function() {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/../src/templates/navbar/index.html",
        controller: function($scope, $location) {
            $scope.isPage = function(name) {
                return new RegExp("/" + name + "($|/)").test($location.path());
            };
        }
    };
});
