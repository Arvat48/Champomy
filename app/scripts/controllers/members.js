"use strict"; 

var app = app.controller('membersCtrl', function($scope,membersFactory){
    $scope.loading =true; 
     var members=membersFactory.getMembers().then(function(members){
    
        $scope.members=members; 
          console.log($scope.members); 
    }, function(msg){
         var alert=alert(msg); 
    });
 
  
    

}); 