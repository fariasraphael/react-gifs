import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs:[],
      selectedGifId: 'jnQYWZ0T4mkhCmkzcn'
    }

    this.search("sad baby")
  }

  search = (query) => {
    giphy('p9wpXw9vFVlSUAE4rdzwCOGLkKp2Zd4X').search({
      q: query,
      rating: 'g',
      limit: 9
    }, (error, result) => {
      
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
        {id: 'jnQYWZ0T4mkhCmkzcn'},
        {id: '5rcwnHg6PCwQPNp0bi'}
      ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
