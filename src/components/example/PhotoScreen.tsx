import React from 'react';
import { Photo } from './Photo';

interface PhotoScreenProps {
    photo: Photo,
    // photos: Photo[],
}

export interface PhotoScreenState {
    photo: Photo,
    // photos: Photo[],
}

export class PhotoScreen extends React.Component<PhotoScreenProps, {}> {
    constructor(props: PhotoScreenProps) {
        super(props);
        this.state = {
            photo: props.photo
        };
        this.likePhoto = this.likePhoto.bind(this);
    }

    likePhoto() {
        // this.setState((state) => ({
        //     photo: state.photo
        // }));
        // this.props.photo.likes += 1;
    }

    render() {
        // return this.state.photos.map((x) => React.createElement(Photo, x.props, null));
        return React.createElement(Photo, {
            url: this.props.photo.props.url,
            likePhoto: this.likePhoto,
        }, null);
    }
}