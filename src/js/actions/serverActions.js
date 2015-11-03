var appConstants = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/dispatcher' );

module.exports = {
  receiveResults: function( searchResults ){
    appDispatcher.handleViewAction({
      actionType : appConstants.RECEIVE_RESULTS,
      searchResults: searchResults
    });
  },
}