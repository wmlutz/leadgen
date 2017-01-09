angular.module('obviapp').controller('showLeadController', function($http){
	$http.get('/leads')
	.then((response) => {
		this.leads = response.data;
	});
})
.controller('getCampController', function($http){
	$http.get('/campaigns')
	.then((response) => {
		this.campaigns = response.data;
	});
})
.controller('getUsersController', function($http){
	$http.get('/users')
	.then((response) => {
		this.users = response.data;
	});
});
