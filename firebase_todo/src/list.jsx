var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
    render: function() {
        return(
            <div>
              {this.renderList()}
            </div>
        );
    },

    renderList: function() {
        console.log();
        if(Object.keys(this.props.items).length === 0 || this.props.items[".value"] === null) {
            return(
                <h4>
                  Add a todo to get start
                </h4>
            );
        } else {
            var children = [];
            for(var key in this.props.items) {
                if(this.props.items[key] !== "item") {
                    var item = this.props.items[key];
                    item.key = key;
                    children.push(
                        <ListItem 
                        key={key}
                        item={item}>
                        </ListItem>
                    );
                }
            }
            return children;
        }
    } 
});