"use strict";

var app = app.factory('membersFactory', function ($http, $q) {
    var factory = {
        members: false,
        getMembers: function () {
            var deferred = $q.defer();
            if (factory.members !== false) {
                deferred.resolve(factory.members);
            } else {
                $http.get('json-server/members')
                    .success(function (data, status) {
                        factory.members = data;
                        console.log(factory.members);
                        deferred.resolve(factory.members)
                    }).error(function (data, status) {
                        deferred.reject('Impossible de charger la liste des membres');
                        console.log('erreur de chargement');
                    });

            }
            return deferred.promise;
        }, 

        getMember :function(id){
            var member={};
           angular.forEach(factory.members, function(value, key){
               if(value.id == id ){
                   member = value;
               }
           });
           return member;
        },






        postMember: function(member){
            $http.post('http://localhost:3000/members', member)
            .success(function(data, status){
                window.alert("Utilisateur correctement enregistré"); 
            }).error(function(data, status){
                window.alert("Erreur !" + status); 
            }) ;
            
        }

    };
    return factory; 
}); 
