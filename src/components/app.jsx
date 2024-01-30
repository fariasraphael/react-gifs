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

    // this.search("sad baby");
    this.fetchTrendingGifs();
    this.changeGif = this.changeGif.bind(this);
  }

  fetchTrendingGifs = () => {
    giphy('p9wpXw9vFVlSUAE4rdzwCOGLkKp2Zd4X').trending({
    limit: 9,
    rating: 'g',
    }, (err, res) => {
      console.log(res.data)
      this.setState({
        gifs: res.data
      });
  });
  }

  search = (query) => {
    giphy('p9wpXw9vFVlSUAE4rdzwCOGLkKp2Zd4X').search({
      q: query,
      rating: 'g',
      limit: 9
    }, (error, result) => {
      
     if (result && result.data && Array.isArray(result.data)) {
      this.setState({
        gifs: result.data
      });
    } else {
      console.error('Unexpected or undefined response format from Giphy:', result);
    }
    });
  }

  changeGif(gifID) {
      this.setState({
        selectedGifId: gifID
      });
      console.log("APP", gifID)
      }
  
  
  

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} gifClickedApp={this.changeGif} />
        </div>
      </div>
    );
  }
}

export default App;