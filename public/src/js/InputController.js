"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.input", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/input", {
    templateUrl : "templates/input.html",
    controller  : "InputController"
  });

}])

.controller("InputController", function($scope) {
  
  $scope.usertest1 = {
    title: 'Developer',
    email: 'ipsum@lorem.com',
    firstName: '',
    lastName: '',
    company: 'Google',
    address: '1600 Amphitheatre Pkwy',
    city: 'Mountain View',
    state: 'CA',
    biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
    postalCode: '94043'
  };
  
  $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
      return {abbrev: state};
  })
  
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500
  };
  
  $scope.showHints = true;
  $scope.user = {
    name: "",
    email: "",
    social: "123456789",
    phone: "N/A"
  };
  
  $scope.usertest3 = {
    name: 'John Doe',
    email: '',
    phone: '',
    address: 'Mountain View, CA',
    donation: 19.99
  };
    
})

.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark')
      .primaryPalette('cyan')
      .dark();
  });
