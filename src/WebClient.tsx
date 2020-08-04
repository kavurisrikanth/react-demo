import * as React from 'react';
import { PhotoScreen } from './components/example/PhotoScreen';
import { Photo, PhotoState } from './components/example/Photo';

interface WCState {
    puppy: Photo
};

export class WebClient extends React.Component<{}, WCState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            puppy: new Photo({
                url: 'http://place-puppy.com/200x200',
                likes: 0
            })
        };
        this.likePuppy = this.likePuppy.bind(this);
    }

    likePuppy() {
        console.log('Inside likePuppy');
        this.setState(prevState => {
            let puppy = prevState.puppy;
            puppy.likes += 1;
            return { puppy };
        });
    }

    render() {
        return [
            React.createElement(Photo, {
                url: this.state.puppy.url,
                likePhoto: this.likePuppy,
                likes: this.state.puppy.likes
            }, null),
            React.createElement(Photo, {
                url: this.state.puppy.url,
                likePhoto: this.likePuppy,
                likes: this.state.puppy.likes
            }, null)
        ];
    }
}
