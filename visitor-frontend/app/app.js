'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.visitor',
  'myApp.report',
  'myApp.home'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
 // console.log("aaa" + $routeParams);

  //$routeProvider.otherwise({redirectTo: '/view1'});
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('urlController', ['$scope',  function ($scope) {
  //var qur= 
  $scope.locURL = window.location.href.split("?")[1];

  // window.location.replace(new RegExp("^(?:.*[&\\?]" + "loc".replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");  
  //window.location.href.substr(window.location.href.lastIndexOf('#!/') + 2);
  console.log($scope.locURL);
  /*$scope.locations =[{ 
      id: "BLR",
      loc: "Bangalore"
  },{
      id:  "HYD",
      loc: "Hyderabad"
  },{
      id: "DEL",
      loc: "Delhi" 

  }]; */


   $scope.locations ={ 
    "BLR" : "Bangalore",
    "HYD" : "Hyderabad",
    "DEL" : "Delhi"
}
if( $scope.locURL != null){
  $scope.locat =  $scope.locations[$scope.locURL.substr($scope.locURL.indexOf("loc=") + 4,3)];
  console.log($scope.locat );
  }
$scope.locOpt = Object.keys( $scope.locations);
console.log($scope.locOpt);

function urlpar(){
  for(var op of $scope.locOpt){
    console.log("dadd" + op);
    if($scope.locations[op] == $scope.locat){
      return op;
    }
  }
}


$scope.changeUrl= function(){
 
  $scope.locURL = "";
  window.location.href =  window.location.href.split("?loc")[0] + "?loc="+  urlpar() ;
  $scope.locURL = "loc="+ urlpar();

}



}]);
;
