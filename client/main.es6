const {Router, Route, Link} = ReactRouter;
const {history} = ReactRouter.lib.BrowserHistory;

Meteor.startup( () =>
  React.render((
    <Router history={history}>
      <Route component={App}>
        <Route path='/' component={Home}/>
      </Route>
    </Router>
  ), document.body)
)

