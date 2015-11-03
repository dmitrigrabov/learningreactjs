var React   = require( 'react' ),
    Search  = require( './Search' ),
    Playlist = require( './Playlist' ),
    Player;

var player;

Player = React.createClass({
  componentDidMount: function(){
    var self = this;

    window.onYouTubeIframeAPIReady = function(){
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        // videoId: 'M7lc1UVf-VE',
        events: {
          // 'onReady': self.onPlayerReady,
          'onStateChange': self.onPlayerStateChange
        }
      });
    }
  },

  onPlayerReady: function( event ){
    event.target.playVideo();
  },

  onPlayerStateChange: function( event ){

  },

  handleClick: function( event ){
    event.preventDefault();

    player.loadVideoById( '9bZkp7q19f0' );
  },

  playVideo: function( videoId ){
    player.loadVideoById( videoId );
  },

  render: function(){
    return (
      <div>
        <div id="player"></div>
        <a href="#" onClick={ this.handleClick }>Play</a>
        <div>
          <Search playVideo={this.playVideo} />
        </div>
        <Playlist />
      </div>
    );
  }
});

module.exports = Player;