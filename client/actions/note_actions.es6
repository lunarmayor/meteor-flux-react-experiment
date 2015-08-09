class NoteActions {
  create(text) {
    this.dispatch(text)
  }

  destroy(noteId) {
    this.dispatch(noteId)
  }
}

this.NoteActions = alt.createActions(NoteActions)
