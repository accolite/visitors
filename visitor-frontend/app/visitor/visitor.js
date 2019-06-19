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


var url = "http://visitors-dev.accolitelabs.com/visitors-dev/api-dev/visitor";
//var url = "http://localhost:8081/api/visitor"
 console.log("aaaa" + loc);
 var locations ={ 
         "BLR" : "Bangalore",
         "HYD" : "Hyderabad",
         "DEL" : "Delhi",
         "" : "",
 }
 console.log(locations[loc]);
 var currentDat= new Date();
 $scope.isSuccess = false;
 $scope.isFailure = false;
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
    $scope.isSuccess = false;
    $scope.isFailure = false
    console.log('pojo', $scope.visitor);
    var inTimeDate = new Date($scope.visitor.inTime);
    console.log('in time', inTimeDate);
    console.log("afaaff" + $routeParams.parm);
    
    $http.post(url + "/create", $scope.visitor)
      .then(function myResponse(response) {
        console.log('response ', response);
        if(response.status == 200){
          $scope.isSuccess = true;
          $scope.visitor = {};
        }else{
          $scope.isFailure = true;
          $scope.failureMsg = response.statusText;
        }
                
      }, function myError(response) {
        console.log('error response ', response);
        $scope.isFailure = true;
        $scope.failureMsg = response.statusText;

      });
      window.scrollTo(0,0);
  };

}]);