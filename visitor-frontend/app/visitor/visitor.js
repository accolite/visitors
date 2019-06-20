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

var url = "http://visitors.accolitelabs.com/visitors/api/visitor";

var locations ={ 
        "BLR" : "Bangalore",
        "HYD" : "Hyderabad",
        "DEL" : "Delhi",
        "" : "",
}

 var currentDat= new Date();
 $scope.isSuccess = false;
 $scope.isFailure = false;
  
  $scope.createVisitor = function () {
    $scope.isSuccess = false;
    $scope.isFailure = false
    var inTimeDate = new Date($scope.visitor.inTime);

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
