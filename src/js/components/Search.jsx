var React = require( 'react' ),
		$ = require( 'jquery' ),
		Result = require( './Result'),
		SearchResultsStore = require( '../stores/SearchResults' ),
		appActions = require( '../actions/appActions' ),
		Search;

function getSearchResults(){
	return SearchResultsStore.getSearchResults();
}

Search = React.createClass({

	getInitialState: function(){
		return {
			query: '',
			results: []
		}
	},

	handleChange: function( event ){
		this.setState({
			query: event.target.value
		});

		console.log( this.state.query );
	},

  handleSubmit: function( event ){
    event.preventDefault();

    appActions.fetchResults( this.state.query );
  },

  componentDidMount: function(){
    SearchResultsStore.addChangeListener( this.change );
  },

  componentDidUnmount: function(){
    SearchResultsStore.removeChangeListener( this.change );
  },

  change: function(){
    this.setState({
      results: getSearchResults()
    });
  },

	render: function(){

		var results = this.state.results.map( function( item ){
			return <Result resultData={ item } playVideo={ this.props.playVideo } />
		}, this );

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="search" onChange={this.handleChange} />
					<input type="submit" />
				</form>

				<ul>
					{ results }
				</ul>
			</div>
		);
	}
});

module.exports = Search;