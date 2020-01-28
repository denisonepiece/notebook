'use strict';

angular.module('noteItem').component('noteItem', {
  templateUrl: 'note-item/note-item.template.html',
  controller: ['$routeParams', '$localStorage', '$scope', '$timeout', '$window',
    function NoteItemController($routeParams, $localStorage, $scope, $timeout, $window) {
      this.noteId = $routeParams.noteId;
      this.note = $localStorage.notes.find(note => note.id == this.noteId);

      $scope.deleteNote = () => {
        $localStorage.notes.splice($localStorage.notes.indexOf(this.note), 1);

        $timeout(() => {
          $window.history.back();
        }, 100);
      };
    }
  ]
});
