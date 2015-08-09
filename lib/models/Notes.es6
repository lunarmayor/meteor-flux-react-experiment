Notes = new Mongo.Collection('notes');

Meteor.startup( () => {
  if(Meteor.isClient) {
    trackCollection(Notes, CollectionActions.notesChanged)
  }
})

Note = {
  create(attributes) {
    Notes.insert(attributes)
  },

  update() {
    //destroy
  },

  destroy(id) {
    Notes.remove({ _id: id })
  },

  findAll() {
    return Notes.find({}).fetch()
  }
}
