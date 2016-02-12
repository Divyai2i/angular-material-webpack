"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.toolbar", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/toolbar", {
    templateUrl : "templates/toolbar.html",
    controller  : "ToolbarController"
  });

}])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})

.controller("ToolbarController", function($scope) {
  var originatorEv;
  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
    
  $scope.announceClick = function(index) {
    $mdDialog.show(
    $mdDialog.alert()
      .title('You clicked!')
      .textContent('You clicked the menu item at index ' + index)
      .ok('Nice')
      .targetEvent(originatorEv)
    );  
    originatorEv = null;    
  };
  
 

})
