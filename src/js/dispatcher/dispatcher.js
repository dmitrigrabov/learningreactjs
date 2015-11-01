'use strict';

var Dispatcher  = require( 'flux' ).Dispatcher,
    assign      = require( 'react/lib/Object.assign' ),
    appDispatcher = assign( new Dispatcher(), {
      handleViewAction: function( action ){
        this.dispatch({
          source: 'VIEW_ACTION',
          action: action
        });
      }
    });

module.exports = appDispatcher;
