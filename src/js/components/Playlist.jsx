var React = require( 'react' ),
    PlaylistStore = require( '../stores/Playlist' ),
    Playlist;

function getPlaylist(){
  return PlaylistStore.getPlaylist();
}

Playlist = React.createClass({

  getInitialState: function(){
    return {
      playlist: []
    }
  },

  componentDidMount: function(){
    PlaylistStore.addChangeListener( this.change );
  },

  componentDidUnmount: function(){
    PlaylistStore.removeChangeListener( this.change );
  },

  change: function(){
    this.setState({
      playlist: getPlaylist()
    });
  },

  render: function(){
    var playlist = this.state.playlist.map( function( item) {
      return <li>{item.snippet.description}</li>
    });

    return (
      <ul>
        {playlist}
      </ul>
    );
  }
});

module.exports = Playlist;