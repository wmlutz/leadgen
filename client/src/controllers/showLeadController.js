angular.module('obviapp').controller('leadController', function($http){
	$http.get('/leads')
	.then((response) => {
		this.leads = response.data;
	});
});
