angular.module('obviapp').controller('loginController', function($http) {

	this.saveUser = function(user) {
		console.log("Save User Function: ", angular.toJson(user));
		$http({
				method: 'POST',
				url: '/users',
				data: angular.toJson(user)
			})
			.then(function() {
				console.log("successfully saved user", user);
				// Should send to the next page upon save, haven't even started to look at if I'm doing thi right: $state.go('/leads');
			});
	};
});
