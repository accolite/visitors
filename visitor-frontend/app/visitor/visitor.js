'use strict';

var app = angular.module('myApp.visitor', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/visitor', {
    templateUrl: 'visitor/visitor.html',
    controller: 'VisitorCtrl'
  });
}]);

app.controller('VisitorCtrl', ['$scope', '$http','$routeParams', function ($scope, $http,$routeParams ) {
  var urlPart = window.location.href.split("?")[1];
  if(urlPart != null){
 var loc = (urlPart).substr(urlPart.indexOf("loc=") + 4);
  }
 console.log("aaaa" + loc);
 var locations ={ 
         "BLR" : "Bangalore",
         "HYD" : "Hyderabad",
         "DEL" : "Delhi",
         "" : "",
 }
 console.log(locations[loc]);
 var currentDat= new Date();

  console.log("afaaff" + $routeParams.parm);
  $scope.visitor = {
    firstName: 'Yashavanta',
    lastName: 'Byagawadi',
    emailId: 'yashavanta92@gmail.com',
    phoneNumber: 8105236319,
    idType: 'Voter Id',
    idNumber: '12345',
    inTime: currentDat,
    outTime: '',
    contactPerson: 'Srikanth  Jenkins',
    purpose: 'Interview',
    officeLocation: locations[loc],
    comingFrom: 'BTM',
    visitorType: 'Guest',
    employeeId: '1111'
  };
  $scope.createVisitor = function () {
    console.log('pojo', $scope.visitor);
    var inTimeDate = new Date($scope.visitor.inTime);
    console.log('in time', inTimeDate);
    console.log("afaaff" + $routeParams.parm);

    $http.post("http://localhost:8081/api/visitor/create", $scope.visitor)
      .then(function myResponse(response) {
        console.log('response ', response);
      }, function myError(response) {
        console.log('error response ', response);
      });
  };

}]);