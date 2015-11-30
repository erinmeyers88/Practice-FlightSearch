angular.module("testApp")
	.service("service", function ($http, $q) {
		
		this.searchResults = function (argument) {
		
		// var deferred = $q.defer();	
			
		//regular key: AIzaSyAFSQP3ClWoPPShBYApLfxjazl-1WsKpu8
		//other key: AIzaSyCL0ZLFUF5_SsrocXX6ZKSaRlonngvd9cE	
			
			return $http({
				method: 'POST',
				url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAFEjs778GYWjvMrYyuzPLk5eLAqtqLfdA',
				data: argument
			}).then(function (response) {
			
			return response.data.trips.tripOption;
			
						
			// deferred.resolve(searchResults);
			
			});
			
			// return deferred.promise;
		};



	});