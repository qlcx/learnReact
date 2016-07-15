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
            done: this.props.item.done,
            textChanged: false,
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

    handleDeleteClick: function() {
      this.fb.remove();
    },

    handleTextChange: function(event) {
      this.setState({
        text: event.target.value,
        textChanged: true
      });
    },

    changesButtons: function() {
      if(!this.state.textChanged) {
        return null;
      } else {
        return [
          <button key={1} className="btn btn-default">Save</button>,
          <button key={2} className="btn btn-default">Undo</button>
        ];
      }
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
                onChange={this.handleTextChange}/>
              <span className="input-group-btn">
                {this.changesButtons()}
                <button 
                  className="btn btn-default"
                  onClick={this.handleDeleteClick}>
                  Delete
                </button>
              </span>
            </div>
        );
    }
});