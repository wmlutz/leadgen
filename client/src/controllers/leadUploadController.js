angular.module('obviapp').controller('leadUploadController', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {
	$scope.uploadCsv = function(file) {
		console.log("Making call to file.upload" + file);
		$scope.upload = Upload.upload({
			url: '/leads', // Point to CSV
			headers: {
				'Accept': "application/json",
				'Content-Type': undefined
			},
			data: {
				'name': 'test',
				'files': file
			}
		});

		$scope.upload.then(function(response) {
			$timeout(function() {
				file.result = response.data;
			});
		}, function(response) {
			if (response.status > 0)
				$scope.errorMsg = response.status + ': ' + response.data;
		}, function(evt) {
			// Math.min is to fix IE which reports 200% sometimes
			file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		});
	};
}]);
