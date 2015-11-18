var React   = require( 'react' ),
    Player  = require( './Player' ),
    App;

App = React.createClass({
  render: function(){
    return (
      <Player />
    );
  }
});

module.exports = App;