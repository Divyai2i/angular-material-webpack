/* global document */

"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

module.exports = angular.module("app.formdialog", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/form-dialog", {
    templateUrl : "templates/form-dialog.html",
    controller  : "FormDialogController"
  });

}])

.controller("FormDialogController", function ($scope, $mdDialog, $mdMedia) {
  $scope.showAdvanced = function(ev) {
   var useFullScreen = ($mdMedia("sm") || $mdMedia("xs"))  && $scope.customFullscreen;
   $mdDialog.show({
     controller  : DialogController,
     templateUrl : "templates/dialog-with-form.tmpl.html",
     parent      : angular.element(document.body),
     targetEvent : ev,
     clickOutsideToClose : true,
     fullscreen  : useFullScreen
   })
   .then(function(answer) {
     console.log(answer);
   }, function() {
     console.log("canceled");
   });

   $scope.$watch(function() {
     return $mdMedia("xs") || $mdMedia("sm");
   }, function(wantsFullScreen) {
     $scope.customFullscreen = (wantsFullScreen === true);
   });

 };
});
