"use strict";

var app = app.factory('eventsFactory', function ($http, $q) {
    var factory = {
        events: false,
        event: false,

        getEvents: function () {
            var deferred = $q.defer();
            if (factory.events !== false) {
                deferred.resolve(factory.event);
            }
            else {
                $http.get('http://localhost:3010/events')
                    .success(function (data, status) {
                        console.log(data);
                        factory.events = data;
                        deferred.resolve(factory.events);
                    }).error(function (data, status) {
                        deferred.reject('Impossible de charger la page' + status);
                    });
            }
            return deferred.promise;
        },

        getEvent: function (url) {
            var deferred = $q.defer();
            $http.get(url).success(function (data, status) {
                console.log(data);
                factory.event = data;
                console.log(factory.event);
                deferred.resolve(factory.event);
            }).error(function (data, status) {
                deferred.reject('Impossible de load l\'event');
            });

            return deferred.promise;

        },

        postEvent: function (event) {
            $http.post('http://localhost:3010/events', event)
                .success(function (data, status) {
                  
                }).error(function (data, status) {
                    
                });
        },

         putEvent: function (url, event) {
             console.log(url);
             console.log(event);
            $http.put(url, event)
                .success(function (data, status) {
                    window.alert('Event correctly saved');
                }).error(function (data, status) {
                    
                });
        },

        deleteEvent: function (url) {
            console.log(url);
            $http.delete(url)
                .success(function (data, status) {
                    
                }).error(function (data, status) { });
        }

    };


    return factory;
});