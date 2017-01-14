angular.module("obviapp").directive('obReceiptPreview', function() {
    return {
        replace: true,
        restrict: "E",
        templateUrl: "/../src/templates/receiptpreview/index.html"
    };
});
