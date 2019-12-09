import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GallaryList/GalleryList';
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
      url: '/gallery'
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


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList />

      </div>
    );
  }
}

export default App;
