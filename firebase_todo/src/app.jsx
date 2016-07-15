var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');

var Header = require('./header');
var List = require('./list');

var config = {
    apiKey: "AIzaSyAKQZnJyI-yOa0jCnK0iIWLatGrYdmMf5k",
    authDomain: "todo-b9ca0.firebaseapp.com",
    databaseURL: "https://todo-b9ca0.firebaseio.com"
};

var Hello = React.createClass({
  mixins: [ReactFire],  //ES6中没有mixins

  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },

  componentWillMount: function() {
    Firebase.initializeApp(config);
    var fb = Firebase.database().ref("items");
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded);
  },

  handleDataLoaded: function() {
    this.setState({loaded: true});
  },

  render: function() {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            To-Do List
          </h2>
          <Header itemsStore={this.firebaseRefs.items} />
          <hr />
          <div className={"contant" + (this.state.loaded ? "load" : "")}>
            <List items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
