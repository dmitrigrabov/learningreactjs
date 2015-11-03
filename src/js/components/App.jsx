var React = require( 'react' ),
    Player = require( './Player' ),
    App;

App = React.createClass({
  render: function(){
    return (
      <div>
        <Player />
      </div>
    );
  }
});

module.exports = App;