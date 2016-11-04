"use strict"; 

var app=app.controller('addMemberCtrl', function($scope, membersFactory){
    $scope.addMember = function(){
    var member={
       firstName : $scope.newMember.firstName, 
       lastName : $scope.newMember.lastName, 
       nickName : $scope.newMember.nickName, 
       promotion : $scope.newMember.promotion, 
       location : $scope.newMember.location, 
       email :$scope.newMember.email, 
       picture :$scope.newMember.picture
    }; 
    membersFactory.postMember(member);
    $scope.newMember ={}; 
    }
}); 