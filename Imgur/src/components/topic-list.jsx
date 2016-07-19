var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions'); 
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    mixins: [
        //监听TopicStore，有变化则调用onChange
        Reflux.listenTo(TopicStore, 'onChange')
    ],

    getInitialState: function() {
        return {
            topics: []
        }
    },

    componentWillMount: function() {
        Actions.getTopics();
    },

    onChange: function(event, topics) {
        this.setState({topics: topics});
    },

    render: function() {
        return(
            <div className="list-group">
              {this.renderTopics()}
            </div>
        );
    },

    renderTopics: function() {
        return(
            this.state.topics.slice(0, 4).map(function(topic) {
                return(
                    <Link 
                      to={"topics/" + topic.id}
                      key={topic.id}
                      className="list-group-item">
                      <h4>{topic.name}</h4>
                      <p>{topic.description}</p>
                    </Link>
                );
            })
        );
    }
})