import React, { Component } from 'react';

class SearchBar extends Component {

	handleUpdate = (event) => {
		//console.log(event.target.value)
		const {searchFunction} = this.props;
		searchFunction(event.target.value);
	}

	render() {
		return (
			<input type="text" className="form-control form-search" name="search-bar" onChange={this.handleUpdate}/>
		);
 	}
}

export default SearchBar;