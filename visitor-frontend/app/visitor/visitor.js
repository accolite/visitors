'use strict';

var app = angular.module('myApp.visitor', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/visitor', {
    templateUrl: 'visitor/visitor.html',
    controller: 'VisitorCtrl'
  });
}]);

app.controller('VisitorCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.visitor = {
    firstName: 'Yashavanta',
    lastName: 'Byagawadi',
    emailId: 'yashavanta92@gmail.com',
    phoneNumber: '8105236319',
    idType: 'Voter Id',
    idNumber: '12345',
    inTime: '1559717904000',
    outTime: '1559717904000',
    contactPerson: 'Srikanth',
    purpose: 'Interview',
    officeLocation: 'Bengaluru',
    comingFrom: 'BTM',
    visitorType: 'Guest',
    employeeId: '1111'
  };
  $scope.createVisitor = function () {
    console.log('pojo', $scope.visitor);
    var inTimeDate = new Date($scope.visitor.inTime);
    console.log('in time', inTimeDate);

    $http.post("http://localhost:8081/api/visitor/create", $scope.visitor)
      .then(function myResponse(response) {
        console.log('response ', response);
      }, function myError(response) {
        console.log('error response ', response);
      });
  };

}]);