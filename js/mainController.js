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
    };
    

    //Set up the search function, which accepts an argument which is a request body.
    $scope.search = function (argument) {
      service.searchResults(argument).then(function (resultOfSearch) {
        
        //As
        
        $scope.searchResults = resultOfSearch;
        
        console.log($scope.searchResults);
        
        //Push airlines and flight numbers into array of objects.
		
        $scope.airlineAndFlightNumbers = [];
        $scope.legInfo = [];
        
        $scope.searchResults.forEach(function (option1) {
          option1.slice.forEach(function (option2) {
            option2.segment.forEach(function (option3) {
              
             //Push airline and flight number 
              // $scope.airlineAndFlightNumbers.push(
              //   {
              //     airline: option3.flight.carrier,
              //     flightNumber: option3.flight.number
              //   }
              //   );
            
                
              option3.leg.forEach(function (option4) {
                $scope.legInfo.push(
                  {
                    totalPrice: option1.saleTotal,
                    totalDuration: option2.duration,
                    airline: option3.flight.carrier,
                    flightNumber: option3.flight.number,
                    arrivalTime: option4.arrivalTime,
                    departureTime: option4.departureTime,
                    destination: option4.destination,
                    origin: option4.origin,
                    duration: option4.duration
                  }
                  );
              });

            });
          });
          console.log($scope.searchResults)
          console.log($scope.legInfo);
        });
       


        //Push leg info into array of objects:
		
        

    //     $scope.getLegInfo = function () {
    //       $scope.searchResults.forEach(function (option1) {
    //         option1.slice.forEach(function (option2) {
    //           option2.segment.forEach(function (option3) {
    //             option3.leg.forEach(function (option4) {
    //               $scope.legInfo.push(
    //                 {
    //                   arrivalTime: option4.arrivalTime,
    //                   departureTime: option4.departureTime,
    //                   destination: option4.destination,
    //                   origin: option4.origin,
    //                   duration: option4.duration
    //                 }
    //                 );
    //             });
    //           });
    //         });
    //       });
    //     } ();
    //   });
    // };



    


    
    
    // $scope.airlineAndFlightNumbers = {};	

    // $scope.getAirlineAndFlightNumbers = function () {
    //   for (var i = 0; i < $scope.searchResults.length; i++) {
    //     for (var j = 0; j < $scope.searchResults[i].length; j++) {
    //       for (var k = 0; k < $scope.searchResults[i][j].length; k++) {
    //            $scope.airlineAndFlightNumbers.push(
    //           {
    //             airline: $scope.searchResults[i][j][k].flight.carrier,
    //             flightNumber: $scope.searchResults[i][j][k].flight.number
    //           }
    //         );
    //       }
    //     }
    //   }
    // console.log($scope.airlineAndFlightNumbers);
    // }();
 
      
 







  });
  };
  
  //Call the search function and pass it the request body.
    $scope.search($scope.requestBody);
 
 });