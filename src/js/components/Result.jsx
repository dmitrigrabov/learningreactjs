var React = require( 'react' ),
    cx    = require( 'classnames' ),
    appActions = require( '../actions/appActions' ),
    Result;

Result = React.createClass({

  getInitialState: function(){
    return {
      clicked: false
    }
  },

  handleClick: function( event ){
    event.preventDefault();

    this.props.playVideo( this.props.resultData.id.videoId );

    this.setState({
      clicked: true
    })
  },

  addToPlaylist: function( event ){
    event.preventDefault();

    appActions.addToPlaylist( this.props.resultData );
  },

  render: function(){
    var classes = cx({
      'clicked': this.state.clicked
    });

    return (
      <li>
        <a href="#" onClick={this.addToPlaylist}>Add - </a>
        <a className={ classes } href="#" onClick={this.handleClick}>{this.props.resultData.snippet.description}</a>
      </li>
    );
  }
});

module.exports = Result;