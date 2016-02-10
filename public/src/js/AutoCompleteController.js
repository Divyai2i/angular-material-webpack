"use strict";

var angular = require("angular");
var ngRoute = require("angular-route");


module.exports = angular.module("app.autocomplete", [
  ngRoute
])


.config(["$routeProvider", function($routeProvider) {

  $routeProvider.when("/autocomplete", {
    templateUrl : "templates/auto-complete.html",
    controller  : "AutoCompleteController"
  });

}])

.controller("AutoCompleteController", function () {

  var self = this;
  self.isDisabled = false;
  self.states        = loadAll();
  self.querySearch = querySearch;

  // function that return the selected item when make match,else return all items
  function querySearch(query) {
    console.log(JSON.stringify( self.states ,null,2));
    var results = query ? self.states.filter( createFilterFor(query) ) : self.states;
    return results;
  }

   // function that make match between the query and some items
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }

  // function for load all items
  function loadAll() {

    var allStates = [
      "Alabama","Alaska",
      "Arizona", "Arkansas",
      "California", "Colorado",
      "Connecticut"
    ];

    return allStates.map( function (state) {
      return {
        value   : state.toLowerCase(),
        display : state
      };
    });

  }

});
