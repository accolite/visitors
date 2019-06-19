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


$scope.searchHead = ["firstName" , "lastName", "emailId", "idNumber", "comingFrom", "officeLocation", "visitorType", "idType", "employeeId"];
$scope.locations ={ 
  ""    : "",
  "BLR" : "Bangalore",
  "HYD" : "Hyderabad",
  "DEL" : "Delhi"
}

$scope.visitorTypes=["", "Guest", "EMPLOYEE"];

var get= "get";
var post ="post";

var filterString= {};
var filterParm=[];
$scope.locOpt = Object.keys( $scope.locations);
var url = "http://visitors.accolitelabs.com/visitors/api/visitor/";
//var url = "http://localhost:8081/api/visitor/"
var dateQuery;
var tDate= new Date();
$scope.time={
  fromTime : tDate,
  toTime: tDate
}
// if error in our request to the server
function errorHandler(response) {
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
 function getClients(type,str) {
   //console.log($scope.time.fromTime);
  if(type == "get"){
    var getUrl = url;
    if(str != null){
      getUrl = url + str;
    } 
    var response = $http.get(getUrl, {},{});
  } else {
   console.log(JSON.stringify("aaa -> " + str));
   var response =  $http.post(url + "search", JSON.stringify(str))  
  
  }

  return response.then(successHandler, errorHandler);
 };
// fill our table

function search(){
  $scope.searchParms =   {
    "firstName": "User",
    "lastName": "test",
    "emailId": "test.abc@gmail.com",
    "phoneNumber": 9823415670,
    "employeeId": 2146,
    "idNumber": "AMPXXXXD",
    "comingFrom": "Hyderabad",
    "officeLocation": "Bangalore"
  }
  
  $http.post(url + "/search", $scope.searchParms)
  .then(function myResponse(response) {
    console.log('response ', response);
    return response;
  }, function myError(response) {
    console.log('error response ', response);
  });

}
function headFilter(val){
  // include header what you want to exclude
 var excludeHead =['id', 'visitSummaryId'];
 return !excludeHead.includes(val);

}
function fillTable(type,str) {
   getClients(type,str)
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

  $http.put(url+ 'exit/' + id).then(function (response) {

    if (response.data){
    
      $scope.msg = "Put Data Method Executed Successfully!";
     // fillTable(get);
     filterString!== null ?fillTable(get) : fillTable(post,filterString) ;
    }
    
    }, function (response) {
    
        $scope.msg = "Service not Exists";
        
        $scope.statusval = response.status;
        
        $scope.statustext = response.statusText;
        
        $scope.headers = response.headers();
    
    });

}
$scope.filter = function(parm, val){
console.log("chk" + filterString !== null);
 var arr = JSON.parse("{"  + JSON.stringify(parm) + ":" + JSON.stringify(val) + "}");
 //var arr1= JSON.parse(arr);
 //var str = {};
// var str = JSON.parse(arr);
Object.assign(filterString, arr);

 console.log("tar : "+ JSON.stringify(filterString));     

 fillTable(post,  filterString);

}



$scope.deleteRec = function(id){
  $http.delete(url + id).then(function (response) {

    if (response.data){
      $scope.msg = "Data Deleted Successfully!";
      filterString!== null ?fillTable(get) : fillTable(post,filterString) ;
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
fillTable(get);
$scope.restric = function(){
  if($scope.time.fromTime > $scope.time.toTime){
    $scope.time.toTime = $scope.time.fromTime;
    console.log( $scope.time.toTime);
   
    //fillTable();
  }

  console.log( "faf" + $scope.lstClients);
}

$scope.filtrTablDt = function(){
  console.log("aaaa");
  console.log("aaa" + $scope.lstClients);
/* $scope.lstClients =$scope.lstClients.filter(function(o){
    var d= new Date(o.inTime);
         return (d.getFullYear() == $scope.time.fromTime.getFullYear() && d.getMonth() == $scope.time.fromTime.getMonth() &&   d.getDate() == $scope.time.fromTime.getDate()).promise  });

         console.log("aaa" + $scope.lstClients);

         */
  console.log(  $scope.time.toTime + "   " + $scope.time.fromTime );
   var toYear = $scope.time.toTime.getFullYear();
   var toMonth = 1 + $scope.time.toTime.getMonth();
   var toDate = $scope.time.toTime.getDate();
   var fromYear = $scope.time.fromTime.getFullYear();
   var fromMonth = 1 + $scope.time.fromTime.getMonth();
   var fromDate = $scope.time.fromTime.getDate();
 
 dateQuery = "getVisitorsByInTime?startDate=" + fromMonth+ '/'+ fromDate+ '/'+ fromYear + "&endDate=" + toMonth+ '/'+ toDate +'/' + toYear; 
console.log(dateQuery);
 fillTable(get,dateQuery);
  
        }


}]);

