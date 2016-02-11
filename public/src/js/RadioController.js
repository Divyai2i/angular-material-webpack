"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

module.exports = angular.module("app.radio", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/radio", {
    templateUrl : "templates/radio.html",
    controller  : "RadioController"
  });

}])

.controller("RadioController", function() {
    var self = this;
    self.contacts = [{
      "id": 1,
      "fullName": "Maria Guadalupe",
      "lastName": "Guadalupe",
      "title": "CEO, Found"
    }, {
      "id": 2,
      "fullName": "Gabriel García Marquéz",
      "lastName": "Marquéz",
      "title": "VP Sales & Marketing"
    }, {
      "id": 3,
      "fullName": "Miguel de Cervantes",
      "lastName": "Cervantes",
      "title": "Manager, Operations"
    }, {
      "id": 4,
      "fullName": "Pacorro de Castel",
      "lastName": "Castel",
      "title": "Security"
    }];
    self.selectedIndex = 2;
    self.selectedUser = function() {
      return self.contacts[self.selectedIndex].lastName;
    };
  });
