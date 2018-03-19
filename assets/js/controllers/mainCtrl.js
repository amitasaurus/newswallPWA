(function() {
	angular.module('myApp')
		.controller('mainCtrl', ['$mdSidenav', '$scope', 'dataService', function($mdSidenav, $scope, dataService) {
			console.log('mainCtrl');
			$scope.toggleLeft = function() {
				$mdSidenav('left')
					.toggle();
			}
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(function(position) {
					console.log(position.coords);
				}, function errorCallback(error) {
					console.log(error);
				}, {
					enableHighAccuracy: true,
					maximumAge: Infinity,
					timeout: 10000
				});
			}
	}])
})();