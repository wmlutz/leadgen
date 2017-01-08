angular.module('obviapp').controller('showLeadController', function($http) {
    $http.get('/leads')
        .then((response) => {
            this.leads = response.data;
        });
});
