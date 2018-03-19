(function() {
	angular.module('myApp')
		.controller('homeCtrl', ['$mdSidenav', '$scope', 'dataService', function($mdSidenav, $scope, dataService) {
			console.log('homeCtrl');
			dataService.getHeadlines()
				.then((data) => {
					$scope.headlines = data.data.articles;
					console.log($scope.headlines);
				})
			$scope.goto = function(url) {
				window.open(url, '_blank');
			}
	}])
})();