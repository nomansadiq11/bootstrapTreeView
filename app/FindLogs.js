

// http://80.227.101.50:5600/cmdc/classification?catalogueId=8193&lang=eng
// http://80.227.101.50:5600/cmdc/classification/1513/classification?filter=type~6&catalogueId=8195&lang=eng&pset=Group3

var ServiceURL = "http://80.227.101.50:5600/cmdc/classification?";

var app = angular.module("TreeView", ['ngCookies']);


app.service("TreeViewService", function ($http) {


    this.PostToService = function (URL) {
        var response = $http({
            method: "get",
            url: ServiceURL +  URL,
            data: '',
            dataType: "json"
        });
        return response;
    }



});








app.controller("TreeViewController", ['$scope', '$cookies', '$cookieStore', '$window' ,'TreeViewService', function($scope, $cookies, $cookieStore, $window, TreeViewService) {



    
    
    $scope.fn_GetClassifcation = function () {

        debugger;

                      
        $scope.URL = "catalogueId=8193&lang=eng"; 


        var Response = TreeViewService.PostToService($scope.URL);
        Response.then(function (msg) {
            
            console.log(msg.data); 
            

            

            
        }, function (msg) {

            console.log('Error: AppInsightsService');
            
        });
    }


    


    
    

}]);