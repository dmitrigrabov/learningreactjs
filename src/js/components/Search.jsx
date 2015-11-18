var React = require( 'react' ),
    $     = require( 'jquery' ),
    Search;

Search = React.createClass({
  fetch: function( query ){
    $.get( 'https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      q   : query,
      key : 'AIzaSyDVPb-EbsD1R0TvrQ1DKf1bIOMYcEuQvtM'
    },function( searchData) {
      console.log( searchData.items );
    });
  }
});

module.exports = Search;