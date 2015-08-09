class NoteListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = NoteStore.getState().state;
  }

  componentDidMount() {
    NoteStore.listen(this.onChange.bind(this))
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.onChange.bind(this))
  }

  onChange(state) {
    this.setState(state)
  }

  render() {
    return (<NoteList notes={this.state.notes} />)
  }
}

this.NoteListContainer = NoteListContainer
