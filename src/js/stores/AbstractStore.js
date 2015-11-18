var EventEmitter  = require( 'events' ).EventEmitter,
    appConstants  = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/dispatcher' ),
    assign        = require( 'react/lib/Object.assign' ),
    AbstractStore;

AbstractStore = assign( {}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit( appConstants.CHANGE_EVENT );
  },

  addChangeListener: function( callback ){
    this.on( appConstants.CHANGE_EVENT, callback );
  },

  removeChangeListener: function( callback ){
    this.removeListener( appConstants.CHANGE_EVENT, callback );
  },

  dispatcherIndex: appDispatcher.register( function( payload ){
    var action = payload.action;

    // switch(action.actionType){
    //   case 
    //   AbstractStore.emitChange()
    //   break;
    // }

    return true;
  })
});

module.exports = AbstractStore;
