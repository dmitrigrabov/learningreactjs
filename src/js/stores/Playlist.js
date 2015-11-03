var EventEmitter  = require( 'events' ).EventEmitter,
    appConstants  = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/dispatcher' ),
    assign        = require( 'react/lib/Object.assign' ),
    playlist = [],
    PlaylistStore;

function addToPlaylist( action ){
  playlist.push( action.resultData )
}

PlaylistStore = assign( {}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit( appConstants.CHANGE_EVENT );
  },

  addChangeListener: function( callback ){
    this.on( appConstants.CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ){
    this.removeListener( appConstants.CHANGE_EVENT, callback );
  },

  getPlaylist: function(){
    return playlist;
  },

  dispatcherIndex: appDispatcher.register( function( payload ){
    var action = payload.action;

    switch(action.actionType){
      case appConstants.ADD_TO_PLAYLIST: addToPlaylist( payload.action );
        PlaylistStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = PlaylistStore;
