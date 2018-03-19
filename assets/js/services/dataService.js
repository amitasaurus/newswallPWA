(function() {
	angular.module('myApp')
		.factory('dataService', ['$http', '$q', function($http, $q) {
			const headlines = 'https://newsapi.org/v2/top-headlines/';
			const everything = 'https://newsapi.org/v2/everything/';
			const sources = 'https://newsapi.org/v2/sources/';

			function getHeadlines() {
				return $http.get(`${headlines}?country=IN`);
			}
			return {
				getHeadlines: getHeadlines
			};
	}])
})();