'use strict';

angular.module('noteItem').component('noteItem', {
  templateUrl: 'note-item/note-item.template.html',
  controller: ['$routeParams', '$localStorage', '$scope',
    function NoteItemController($routeParams, $localStorage, $scope) {
      this.noteId = $routeParams.noteId;
      this.note = $localStorage.notes.find(note => note.id == this.noteId);

      $scope.deleteNote = () => {
        $localStorage.notes.splice($localStorage.notes.indexOf(this.note), 1);
        setTimeout(goBack, 100);
      };

      function goBack() {
        history.back();
      }
    }
  ]
});
