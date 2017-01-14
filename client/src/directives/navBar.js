angular.module("obviapp").directive('obNavBar', function() {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/../src/templates/navbar/index.html"
    };
});
