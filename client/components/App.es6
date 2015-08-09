App = React.createClass({
  render() {
    return (
      <div className='app'>
        <SideNavBar />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  },
})
