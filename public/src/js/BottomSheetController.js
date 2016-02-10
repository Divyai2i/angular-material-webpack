"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.bottomsheet", [
  ngRoute
])

.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/bottom-sheet", {
    templateUrl : "templates/bottom-sheet.html",
    controller  : "BottomSheetController"
  });

}])

.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('hangout', 'src/img/hangout.svg', 32)
      .icon('mail', 'src/img/mail.svg', 32)
      .icon('message', 'src/img/message.svg', 32)
      .icon('print', 'src/img/print.svg', 32)
      .icon('upload', 'src/img/upload.svg', 32)
      .icon('copy', 'src/img/copy.svg', 32)
      .icon('share', 'src/img/share.svg', 32)
      .icon('facebook', 'src/img/facebook.svg', 32)
      .icon('twitter', 'src/img/twiter.svg', 32);
  })

.controller("BottomSheetController", function($scope,$mdBottomSheet) {
  
  $scope.alert = '';
  
  $scope.showListBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'templates/bottom-sheet-list.html',
      controller: 'ListBottomSheetCtrl'
    }).then(function(clickedItem) {
      $scope.alert = clickedItem['name'] + ' clicked!';
    });
  };
  
  $scope.showGridBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'templates/bottom-sheet-grid.html',
      controller: 'GridBottomSheetCtrl',
      clickOutsideToClose: false
    }).then(function(clickedItem) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(clickedItem['name'] + ' clicked!')
          .position('top right')
          .hideDelay(1500)
      );
    });
  };

})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'share' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})

.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})

.run(function($http, $templateCache) {
    var urls = [
      'src/img/hangout.svg',
      'src/img/mail.svg',
      'src/img/message.svg',
      'src/img/print.svg',
      'src/img/upload.svg',
      'src/img/copy.svg',
      'src/img/share.svg',
      'src/img/facebook.svg',
      'src/img/twiter.svg'
    ];
    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });
  });
