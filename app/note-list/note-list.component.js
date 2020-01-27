'use strict';

angular.module('notebookApp').component('noteList', {
  templateUrl: 'note-list/note-list.template.html',
  controller: function NoteListController(
      $localStorage
  ) {
    $localStorage.$default({
      notes: [],
    });

    this.notes = $localStorage.notes;
  }
});