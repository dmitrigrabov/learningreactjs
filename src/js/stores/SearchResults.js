var EventEmitter  = require( 'events' ).EventEmitter,
    appConstants  = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/dispatcher' ),
    assign        = require( 'react/lib/Object.assign' ),
    playlist = [],
    SearchResultsStore;

function receiveResults( action ){
  playlist = playlist.concat( action.searchResults );
}

SearchResultsStore = assign( {}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit( appConstants.CHANGE_EVENT );
  },

  addChangeListener: function( callback ){
    this.on( appConstants.CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ){
    this.removeListener( appConstants.CHANGE_EVENT, callback );
  },

  getSearchResults: function(){
    return playlist;
  },

  dispatcherIndex: appDispatcher.register( function( payload ){
    var action = payload.action;

    switch(action.actionType){
      case appConstants.RECEIVE_RESULTS: receiveResults( payload.action );
        SearchResultsStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = SearchResultsStore;
