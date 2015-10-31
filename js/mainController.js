angular.module("testApp")
  .controller("mainController", function ($scope, service) {


    $scope.requestBody = {
      "request": {
        "passengers": {
          "kind": "qpxexpress#passengerCounts",
          "adultCount": 1,
          "childCount": 0,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "seniorCount": 0
        },
        "slice": [
          {
            "kind": "qpxexpress#sliceInput",
            "origin": "PDX",
            "destination": "LAX",
            "date": "2015-11-25",
            "maxStops": 0,
            "maxConnectionDuration": 0,
            "preferredCabin": "COACH",
            "permittedDepartureTime": {
              "kind": "qpxexpress#timeOfDayRange",
              "earliestTime": "01:00",
              "latestTime": "23:00"
            },
            "permittedCarrier": [
              ""
            ],
            "alliance": "",
            "prohibitedCarrier": [
              ""
            ]
          }
        ],
        "maxPrice": "",
        "saleCountry": "",
        "refundable": false,
        "solutions": 50
      }
    }

    $scope.search = function (argument) {
      service.basicSearch(argument).then(function (resultOfSearch) {
        $scope.searchResults = resultOfSearch;
        console.log($scope.searchResults);
      });
    };

    $scope.search($scope.requestBody);

    $scope.airline = function () {
      angular.forEach($scope.searchResults.trips.tripOption, function (option) {
        angular.forEach($scope.searchResults.trips.tripOption[option], function (slice) {
          angular.forEach($scope.searchResults.trips.tripOption[option][slice], function (segment) {
            return $scope.searchResults.trips.tripOption[option][slice][segment].flight.carrier
          })
        })
      })
    }();
    
    
      





  });