Input = React.createClass({
  create(e) {
    e.preventDefault()
    let input = React.findDOMNode(this.refs.input);
    let value = input.value;
    input.value = '';
    Messages.insert({text: value})
  },

  render() {
    return (
      <form onSubmit={this.create}>
        <input ref='input' type='text'/>
      </form>
    )
  }
})
