"use strict";

var app = app.controller('soireeCtrl', function ($scope, $window, membersFactory, eventsFactory) {
    var id; 
    
    $scope.loading = true;
    $scope.update = false;
    $scope.newEvent = {
        date: {},
        title: {},
        participants: {}
    }

     $scope.updateEvent = {
        date: {},
        title: {},
        participants: {}
    }



    var members = membersFactory.getMembers().then(function (members) {

        $scope.members = members;
        $scope.loading = false;

    }, function (msg) {
        var alert = alert(msg);
    });

    var events = eventsFactory.getEvents().then(function (events) {
        $scope.events = events;

    }, function () {
        window.alert('AIE AIE AIE');
    });


    $scope.addEvent = function () {
            var presents = [];
            var participants = $scope.newEvent.participants;


            angular.forEach(participants, function (value, key) {

                if (value === true) {
                    var present;
                    present = membersFactory.getMember(key);
                    console.log(present);
                    presents.push(present);

                }

            });
            var event = {
                date: $scope.newEvent.date,
                title: $scope.newEvent.title,
                personnes: presents
            }

            eventsFactory.postEvent(event);
            $window.location.reload();
    }

    $scope.showUpdate = function (target) {
        $scope.update = true;
        id=target;
        
    };

    $scope.updateEventFunction = function () {
       
        var presents = [];
        var participants = $scope.updateEvent.participants;


        angular.forEach(participants, function (value, key) {

            if (value === true) {
                var present;
                present = membersFactory.getMember(key);
               
                presents.push(present);

            }

        });
        var event = {
                date: $scope.updateEvent.date,
                title: $scope.updateEvent.title,
                personnes: presents
        }
        console.log(event);
        eventsFactory.putEvent('http://localhost:3010/events/' + id , event);
        $window.location.reload();
    };
    


    $scope.suppressEvent = function (id) {
        eventsFactory.deleteEvent('http://localhost:3010/events/' + id);
        $window.location.reload();
    }
});