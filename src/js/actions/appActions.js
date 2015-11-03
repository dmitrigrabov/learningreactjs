var appConstants = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/dispatcher' ),
    videoService = require( '../services/videoService' );

module.exports = {
  fetchResults: function( query ){
    appDispatcher.handleViewAction({
      actionType : appConstants.FETCH_RESULTS,
      query: query
    });

    videoService.fetchResults( query );
  },

  addToPlaylist: function( resultData ){
    appDispatcher.handleViewAction({
      actionType : appConstants.ADD_TO_PLAYLIST,
      resultData: resultData
    });
  }
}