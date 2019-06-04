'use strict';

angular.module('myApp.visitor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/visitor', {
    templateUrl: 'visitor/visitor.html',
    controller: 'VisitorCtrl'
  });
}])

.controller('VisitorCtrl', [function() {

}]);