class CollectionActions {
  notesChanged(notes) {
    this.dispatch(notes);
  }
}

this.CollectionActions = alt.createActions(CollectionActions)
