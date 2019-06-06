'use strict';

angular.module('myApp.report', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/report', {
    templateUrl: 'report/report.html',
    controller: 'ReportCtrl'
  });
}])

.controller('ReportCtrl', ['$scope', '$http', function($scope, $http) {



// table headers that we need to show
$scope.tableHeaders = {
                       "firstName"    : 'First Name',     "lastName"      : 'Last Name',
                       "phoneNumber"  : 'Phone Number',   "emailId"       : 'Email Id',
                       "comingFrom"   : 'Coming From',    "officeLocation": 'Office Location',
                       "idType"       : 'Gov Id Type',    "idNumber"      :  'Gov Id Number',
                       "inTime"       : 'In Time',        "outTime"       : 'Out Time', 
                       "contactPerson": 'Contact Person', "purpose"       : 'Purpose',
                       "visitorType"  : 'Visitor Type',   "employeeId"    : 'Emp Id' };
// if error in our request to the server
function errorHandler(response) {s
    if (!angular.isObject(response))
    return null;
    // if the response is an object return his value
    return response.data;
 
 };
 
 // if success in our request to the server
function successHandler(response) {
  return response.data;
};
// get Clients Info from DataBase
 function getClients() {
    var response = $http.get("http://localhost:8081/api/visitor/", {},{});
    return response.then(successHandler, errorHandler);
 };
// fill our table
function headFilter(val){
  // include header what you want to exclude
 var excludeHead =['id'];
 return !excludeHead.includes(val);

}
function fillTable() {
   getClients()
   .then(function(response){
       $scope.lstClients = response;
       $scope.headElement= (Object.keys($scope.lstClients[0])).filter(headFilter);
       console.log(Object.keys($scope.lstClients[0]));
   })
   .catch(function(response) {
       console.log(response); 
 });
};



$scope.setExitTime= function(id){
  console.log($scope.lstClients);

  $http.put('http://localhost:8081/api/visitor/exit/' + id).then(function (response) {

    if (response.data){
    
    $scope.msg = "Put Data Method Executed Successfully!";
    fillTable();}
    
    }, function (response) {
    
    $scope.msg = "Service not Exists";
    
    $scope.statusval = response.status;
    
    $scope.statustext = response.statusText;
    
    $scope.headers = response.headers();
    
    });

}


$scope.deleteRec = function(id){
  $http.delete('http://localhost:8081/api/visitor/'+ id).then(function (response) {

    if (response.data){
      $scope.msg = "Data Deleted Successfully!";
      fillTable();
    }
    
    }, function (response) {
    
    $scope.msg = "Service not Exists";
    
    $scope.statusval = response.status;
    
    $scope.statustext = response.statusText;
    
    $scope.headers = response.headers();
    
    });
}

$scope.editable = true;
$scope.editItem = function(id){
  $scope.editable = !$scope.editable;
}
fillTable();


}]);

