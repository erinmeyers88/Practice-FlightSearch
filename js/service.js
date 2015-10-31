angular.module("testApp")
	.service("service", function ($http) {

		this.basicSearch = function (argument) {
			return $http({
				method: 'POST',
				url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAFSQP3ClWoPPShBYApLfxjazl-1WsKpu8',
				data: argument
			}).then(function (response) {;
				
				return response.data;
			});
		};

	
	
	
	
	
	
		

	});