angular.module("testApp")
  .controller("mainController", function ($scope, service) {

//Create the request body for the flight search.

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

//Set up the search function, which accepts an argument which is a request body.
    $scope.search = function (argument) {
      service.basicSearch(argument).then(function (resultOfSearch) {
        $scope.searchResults = resultOfSearch;
        console.log($scope.searchResults);
      });
    };



//Call the search function and pass it the request body.
    $scope.search($scope.requestBody);





    



  });