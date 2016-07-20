var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail = require('./components/image-detail');

//  topics/:id，可以匹配所有topics/(string)
//eg topics/addjk => this.props will contain id: "addjk"

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
);