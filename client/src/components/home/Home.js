import React, { Component } from 'react';

// Components
import TitleEntry from './TitleEntry';
import InDevelopment from './InDevelopment';

// Images
import PancakeSplat from '../../assets/pancakeSplat.jpg';
import BrunchTable from '../../assets/brunchTable.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        };
    }

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
                <img
                    className="bg"
                    style={{
                        width: this.state.x + 'px',
                        height: this.state.y + 'px',
                        backgroundSize: 'cover'
                    }}
                    src={PancakeSplat}
                    // src={BrunchTable}
                />
                <TitleEntry handleSignIn={this.props.handleSignIn} />
                <InDevelopment
                    style={{
                        marginTop: 500 + 'px'
                    }}
                />
            </div>
        );
    }
}

export default Home;
