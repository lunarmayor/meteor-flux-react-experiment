class NoteListItem extends React.Component {
  destroy() {
    NoteActions.destroy(this.props.note._id)
  }

  render() {
    return (
      <li className="note">
        {this.props.note.text}
        <span className="note-x" onClick={this.destroy.bind(this)}>x</span>
      </li>
    )
  }
}

this.NoteListItem = NoteListItem
