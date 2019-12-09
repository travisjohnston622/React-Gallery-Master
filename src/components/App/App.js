import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryData: []
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          galleryData: response.data
        })
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  putGallery = (id) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/'+ id
    })
      .then((response) => {
        this.getGallery();
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <h2>The beauty of ducks!</h2>
        <GalleryList galleryData={this.state.galleryData} putGallery={this.putGallery} />
      </div>
    );
  }
}

export default App;
