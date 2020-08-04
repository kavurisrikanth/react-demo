import React from 'react';

interface PhotoProps {
    url?: string,
    likePhoto?: () => void,
    likes?: number
};

export interface PhotoState {
    url: string,
    likes: number
};

export class Photo extends React.Component<PhotoProps, {}> {
    static defaultProps = {
        url: 'http://place-puppy.com/300x300',
        likes: 0
    };
    constructor(props: PhotoProps) {
        super(props);
        this.increaseLikes = this.increaseLikes.bind(this);
    }

    render() {
        return <div>
            <img src={this.props.url} />
            <p>{this.props.likes}</p>
            <button onClick={this.increaseLikes}>Like</button>
        </div>
    }

    increaseLikes() {
        console.log('Entered event handler. Current likes: ' + this.props.likes);
        this.props.likePhoto?.();
    }
}