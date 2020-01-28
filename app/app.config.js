'use strict';

angular.module('notebookApp').config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.when('/notes', {
      template: '<note-list></note-list>'
    }).when('/notes/:noteId', {
      template: '<note-item></note-item>'
    }).when('/create', {
      template: '<note-create></note-create>'
    }).otherwise('/notes');
  }
]);
