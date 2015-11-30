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
            "date": "2015-12-15",
            "maxStops": 10,
            "maxConnectionDuration": 1440,
            "preferredCabin": "",
            "permittedDepartureTime": {
              // "kind": "qpxexpress#timeOfDayRange",
              // "earliestTime": "01:00",
              // "latestTime": "23:00"
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
        "refundable": "",
        "solutions": 50
      }
    };
    

    //Set up the search function, which accepts an argument which is a request body.
    $scope.search = function (argument) {
      service.searchResults(argument).then(function (resultOfSearch) {



        $scope.searchResults = resultOfSearch;





        $scope.searchResults.forEach(function (option1) {

          option1.saleTotal = option1.saleTotal.replace("USD", "$");

          option1.slice.forEach(function (option2) {

            option2.duration = option2.duration / 60;

            option2.segment.forEach(function (option3) {
              
                var m = option3.duration % 60;
                var h = (option3.duration - m) / 60;

                option3.cleanDuration = h.toString() + ":" + (m < 10 ? "0" : "") + m.toString();
              
            

              // option3.flight.carrier,
              // option3.flight.number,
                 

              option3.leg.forEach(function (option4) {


                option4.cleanDepartureTime = new Date(option4.departureTime);
                    
                // option4.origin,
                    
                option4.cleanArrivalTime = new Date(option4.arrivalTime);
              
                   
                // option4.destination,
                    
                    
                var m = option4.duration % 60;
                var h = (option4.duration - m) / 60;

                option4.cleanDuration = h.toString() + ":" + (m < 10 ? "0" : "") + m.toString();
                    
                // option4.duration
                  

              }
                );
            });

          });

          console.log($scope.searchResults);
         
         
          //   //Push airlines and flight numbers into array of objects.
		
          //   $scope.airlineAndFlightNumbers = [];
          //   $scope.legInfo = [];

       
       
          //   $scope.resultsList = [];

          //   $scope.resultObject = {};

          //   $scope.searchResults.forEach(function (option1) {

          //     $scope.resultObject.totalPrice = option1.saleTotal;

          //     option1.slice.forEach(function (option2) {

          //       $scope.resultObject.totalDuration = option2.duration;

          //       option2.segment.forEach(function (option3) {

          //         $scope.resultObject.segments = [
          //           {
          //             airline: option3.flight.carrier,
          //             flightNumber: option3.flight.number,
          //           }
          //         ];

          //         option3.leg.forEach(function (option4) {

          //           $scope.resultObject.segments[$scope.resultObject.segments.length-1].legs = [
          //             {
          //               arrivalTime: option4.arrivalTime,
          //               departureTime: option4.departureTime,
          //               destination: option4.destination,
          //               origin: option4.origin,
          //               duration: option4.duration
          //             }
          //           ];

          //         }
          //           );
          //       });

          //     });

          //     $scope.resultsList.push($scope.resultObject);


          //   });
          //   console.log($scope.resultsList);
          // });



        });

      });





    };

    //Call the search function and pass it the request body.
    $scope.search($scope.requestBody);

  });