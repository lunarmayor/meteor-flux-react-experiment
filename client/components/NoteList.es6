class NoteList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  _onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  _onKeyDown(e) {
    if(e.keyCode === 13) {
      this._save()
    }
  }

  _save() {
    if(this.state.text.length) {
      NoteActions.create(this.state.text)
      this.setState({ text: '' })
    }
  }

  render() {
    let text = this.state.text
    let notes = this.props.notes.map( (note) => {
      return (
        <NoteListItem key={note._id} note={note}/>
      )
    })

    return(
      <div className="noteList">
        <h4>Todo</h4>
        <input
          placeholder="new idea..."
          onChange={this._onChange.bind(this)}
          onKeyDown={this._onKeyDown.bind(this)}
          value={text}/>
        <ul>
          {notes}
        </ul>
      </div>
    )
  }
}

this.NoteList = NoteList
