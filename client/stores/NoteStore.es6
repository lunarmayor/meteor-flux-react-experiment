class NoteStore {
  constructor() {
    this.bindListeners({
      onNotesChanged: CollectionActions.notesChanged,
      onCreate: NoteActions.create,
      onDestroy: NoteActions.destroy,
    });

    this.state = {
      notes: Note.findAll(),
    }

    Meteor.subscribe('notes');
  }

  onNotesChanged() {
    this.setState({ notes: Note.findAll() })
  }

  onCreate(text) {
    Note.create({text: text})
  }

  onDestroy(noteId) {
    Note.destroy(noteId)
  }
}

this.NoteStore = alt.createStore(NoteStore, 'NoteStore')
