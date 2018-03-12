(function() {
	angular.module('myApp')
		.controller('mainCtrl', ['$mdSidenav', '$scope', 'dataService', function($mdSidenav, $scope, dataService) {
			console.log('mainCtrl');
			$scope.toggleLeft = function() {
				$mdSidenav('left')
					.toggle();
			}
	}])
})();