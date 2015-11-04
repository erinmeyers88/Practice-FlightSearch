angular.module("testApp")
	.service("service", function ($http, $q) {
		
		this.basicSearch = function (argument) {
		
		var deferred = $q.defer();	
			
			$http({
				method: 'POST',
				url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAFSQP3ClWoPPShBYApLfxjazl-1WsKpu8',
				data: argument
			}).then(function (response) {;
			
			//Create a variable to hold all of the airlines the search returns.
			var airlines = [];
			
			//Push all of the airlines the search returns into the airlines array.
			response.data.trips.tripOption.forEach(function(option1){
				option1.slice.forEach(function(option2){
					option2.segment.forEach(function(option3){
						airlines.push(option3.flight.carrier);
					});
					
				});
			});	
			
			
			//Create a variable to hold all of the total prices the search returns.
			
			var totalPrices = [];
			
			//Push all of the total prices the search returns into the total prices array .
			response.data.trips.tripOption.forEach(function(option1){
				totalPrices.push(option1.saleTotal);
			});	
			
			
			
			
				
			deferred.resolve({airlines, totalPrices});	
			
			});
			
			return deferred.promise;
		};

	
	
	
	
	
	
		

	});