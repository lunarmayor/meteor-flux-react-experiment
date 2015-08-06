App = React.createClass({
  render() {
    return (
      <div className='app'>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },
})
