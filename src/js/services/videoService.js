var $ = require( 'jquery' ),
    serverActions = require( '../actions/serverActions');

module.exports = {
  fetchResults: function( query ){
    var self = this;

    $.get( 'https://www.googleapis.com/youtube/v3/search', {
      part: 'snippet',
      q   : query,
      key : 'AIzaSyDVPb-EbsD1R0TvrQ1DKf1bIOMYcEuQvtM'
    },function( searchData) {
      serverActions.receiveResults( searchData.items );
    });
  }
}