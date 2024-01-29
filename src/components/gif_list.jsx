import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
	renderList = () => {
		const {gifs, gifClickedApp} = this.props;

		return gifs.map(gif => <Gif id={gif.id} key={gif.id} gifClickedGifList={gifClickedApp} />);
	}
	
	render() {
		return (
			<div className="gif-list">
				{this.renderList()}
			</div>
		);
 	}
}

export default GifList;