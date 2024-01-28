import React, { Component } from 'react';

class Gif extends Component {
	handleClick = () => {
    	if (this.props.gifClickedGifList) {
      		this.props.gifClickedGifList(this.props.id);
      		console.log("find me at gif")
    	}
  	}

	render() {
		const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`
		return (
			<img src={src} alt="" className="gif" id={this.props.id} onClick={this.handleClick}/>
		);
 	}
}

export default Gif;