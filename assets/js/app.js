(function() {
	angular.module('myApp', ['ui.router', '720kb.fx', 'ngMaterial'])
		.config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('indigo',{
					'default' : 'A700',
					'hue-1' : 'A400',
					'hue-2' : 'A700',
					'hue-3' : 'A200'
				})
				.accentPalette('blue-grey');
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('/', {
				url: '/',
				templateUrl: 'assets/views/home.html',
				controller: 'homeCtrl'
			})
		   }])
		.run(['$http', function($http) {
			$http.defaults.headers.common['X-Api-Key'] = '4ff16a30e00640cab0a2a9731ccc9510';
		}]);
})();