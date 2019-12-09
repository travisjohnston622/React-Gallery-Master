import React, { Component } from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

    render() {
        const duckArray = this.props.galleryItems.map((item, index) => {
            return (
                <GalleryListItem key={index} galleryItem={item} likeImage={this.props.likeImage} />
            )
        })
        return (
            <div>
                <p>{duckArray}</p>
                <img
                    style={{ width: 200, height: 200 }}
                    src={'images/' + this.props.galleryItem.path}
                    alt={''}
                />
            </div>
        )
    }
}

export default GalleryList;