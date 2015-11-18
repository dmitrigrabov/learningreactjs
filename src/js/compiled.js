var React = require('react'),
    App;

App = React.createClass({
  displayName: "App",

  render: function render() {
    return React.createElement(
      "div", // component type
      { className: "some class" }, // attributes
      "It works!" // child
    );
  }
});

module.exports = App;