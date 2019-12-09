import React, { Component } from 'react';

class GalleryListItem extends Component {
   
    render() {
        return (
            <div>
                <p>
                    {this.props.galleryItem.id} 
                    {this.props.galleryItem.title}
                    {this.props.galleryItem.path}
                    {this.props.galleryItem.description}
                    {this.props.galleryItem.likes}
                </p>
                <button onClick={() => this.props.likeImage(this.props.galleryItem.id)}>Like!</button>
            </div>
        )
    }
}

export default GalleryListItem;