angular.module('obviapp').controller('loginController', function() {
	this.saveUser = function(user) {
		console.log("User: ", user);

		// Should send to the next page upon save, haven't even started to look at if I'm doing thi right
		// $state.go('/leads');
	};
});
