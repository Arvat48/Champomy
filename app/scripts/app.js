'use strict';

/**
 * @ngdoc overview
 * @name champomyAppApp
 * @description
 * # champomyAppApp
 *
 * Main module of the application.
 */
var app=angular.module('champomyApp', ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
          .when('/', {templateUrl: 'views/home.html', controller:'homeCtrl'})
          .when('/members', {templateUrl:"views/members.html", controller:"membersCtrl"}  )
          .when('/addMember', {templateUrl:"views/addMember.html"  , controller:"addMemberCtrl"})
          .when('/soiree',{templateUrl:"views/soireeHome.html", controller:"soireeCtrl"})
          .otherwise({redirectTo :'/'})
     
      
  });

