'use strict';

angular.module('noteCreate').component('noteCreate', {
  templateUrl: 'note-create/note-create.template.html',
  controller: ['$scope', '$localStorage', '$timeout', '$window',
    function NoteCreateController($scope, $localStorage, $timeout, $window) {

      $scope.save = function () {
        if ($scope.note.title && $scope.note.text) {
          let newNote = angular.copy($scope.note);
          newNote.id = calculateNewID($localStorage.notes);

          $localStorage.notes.unshift(newNote);
          $timeout(() => {
            $window.history.back();
          }, 100);
        }
      };

      function calculateNewID(arr) {
        if (arr.length) {
          return +arr[0].id + 1;
        } else {
          return 1;
        }
      }
    }
  ]
});
