import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItems: []
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
          galleryItems: response.data
        }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  likeImage = (id) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/:id'
    })
      .then((response) => {
        console.log(response);
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
        <GalleryList galleryItems={this.state.galleryItems} likeImage={this.likeImage} />
      </div>
    );
  }
}

export default App;
