var appConstants = require( '../constants/appConstants' ),
    appDispatcher = require( '../dispatcher/AppDispatcher' );

module.exports = {
  sampleAction: function(){
    appDispatcher.handleViewAction({
      actionType : appConstants.SAMPLE_CONSTANT
    });
  }
}