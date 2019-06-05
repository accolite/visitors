'use strict';

var app = angular.module('myApp.visitor', ['ngRoute'])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/visitor', {
    templateUrl: 'visitor/visitor.html',
    controller: 'VisitorCtrl'
  });
}]);

app.controller('VisitorCtrl', ['$scope', function ($scope) {
  $scope.visitor = {
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: '',
    idType: '',
    idNumber: '',
    inTime: '',
    outTime: '',
    contactPerson: '',
    purpose: '',
    officeLocation: '',
    comingFrom: ''
  };
  $scope.createVisitor = function () {
    console.log('pojo', $scope.visitor);
    var inTimeDate = new Date($scope.visitor.inTime);
    console.log('in time', inTimeDate);
  };
}]);