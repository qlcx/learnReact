var React = require('react');
var Firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAKQZnJyI-yOa0jCnK0iIWLatGrYdmMf5k",
    authDomain: "todo-b9ca0.firebaseapp.com",
    databaseURL: "https://todo-b9ca0.firebaseio.com"
};

module.exports = React.createClass({
    getInitialState: function() {
        return {
            text: this.props.item.text,
            done: this.props.item.done
        }
    },

    componentWillMount: function() {
      this.fb = Firebase.database().ref("items/" + this.props.item.key);
    },

    handleDoneChange: function(event) {
      var update = {done: event.target.checked}
      this.setState(update);
      this.fb.update(update);
    },

    handleData: function() {
      
    },

    render: function() {
        return(
            <div className="input-group">
              <span className="input-group-addon">
                <input type="checkbox"
                  checked={this.state.done}
                  onChange={this.handleDoneChange} />
              </span>
              <input type="text"
                className="form-control"
                value={this.state.text}
                onChange={this.handleData}/>
              <span className="input-group-btn">
                <button className="btn btn-default">
                  Delete
                </button>
              </span>
            </div>
        );
    }
});