import React, { Component } from 'react';
import GalleryListItem from '../GalleryListItem/GalleryListItem';

class GalleryList extends Component {

        render() {
            console.log(this.props);

            const duckArray = this.props.galleryData.map((item, index) => {
                return (
                    <GalleryListItem key={index} item={item} putGallery={this.props.putGallery} />
                )
            });

            return (
                <div>
                    {duckArray}
                </div>
            )
        }
}


export default GalleryList;