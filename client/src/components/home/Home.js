import React, { Component } from 'react';
import TitleEntry from './TitleEntry';

class Home extends Component {
    state = {
        x: 0,
        y: 0
    };

    // credit: Gokhan Demirhan https://codepen.io/gokhandemirhan/pen/WObNOm
    componentWillMount() {
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        this.setState({ x: x, y: y });
    }

    render() {
        return (
            <div>
                {/* <img className='bg' style={{ width: this.state.x+'px', height: this.state.y+'px' }} /> */}
                <img
                    className="bg"
                    src={
                        'https://source.unsplash.com/' +
                        this.state.x +
                        'x' +
                        this.state.y +
                        '/?brunch'
                    }
                />

                <TitleEntry />
            </div>
        );
    }
}

export default Home;
