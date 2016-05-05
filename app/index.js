var React = require('react');
var ReactDOM = require('react-dom');

var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.monkey}</div>
    )
  }
});

ReactDOM.render(<HelloUser monkey="Baboon"/>, document.getElementById('app'));
