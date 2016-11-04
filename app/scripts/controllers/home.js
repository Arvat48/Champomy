"use strict"; 

var app=app.controller('homeCtrl', ['$scope','$interval', function($scope, $interval){
    $scope.dialogs=function(){
       var messages =['Initialisation En Cours', 'HUM HUM !','Bienvenue sur l\'application', ' Je suis le mec qui code !', 'Enfin qui essaye', 'Bon je vais essayer de t\'expliquer le site', 'Ici tu pourras : ', ' Voir la liste des membres', 'Programmer une soirée', 'Voir les stocks', 'Et plein d\' autres trucs', 'Tu vois le Menu la haut', 'Clique dessus dès que tu pourras', 'Bon allez je me casse', 'PS : Ceci n\' est qu\'une béta', 'il se pourrait que ça bug un peu!', '/Fin de transmission!' , 'BYE :)'];
       var i=0;
     
               $interval(function(){
                    Materialize.toast(messages[i], 3000);
                    i++;
               },2000, messages.length);
                
        };
      
    
}]); 