var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    renderComments: function() {
        return _.map(this.props.comments, function(comment) {
            return(
                <li className="list-group-item comment-box" key={comment.id}>
                  <span className="badge">{comment.ups}</span>
                  <h5>{comment.author}</h5>
                  {comment.comment}
                </li>
            );
        })
    },

    render: function() {
        return(
            <ul className="list-group">
              {this.renderComments()}
            </ul>
        );
    }
});