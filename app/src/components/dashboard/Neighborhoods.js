import React, { Component } from 'react';
import fetcher from '../../helpers/fetcher';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';


const QuadrantViews = props => (
    <div>
        <h4>View Neighborhoods by Quadrant</h4>
        <ul>
            {props.quadrants.map(quadrant =>
            <li key={quadrant}>{quadrant}</li>
            )}
        </ul>
        <hr />
    </div>
);

const AllNeighborhoodsView = props => (
    <ul>
        {props.neighborhoods.map(neighborhood =>
        <li key={neighborhood._id}>{neighborhood.name}</li>
        )}
    </ul>
);



class Neighborhoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neighborhoods: [],
            quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
        };
        this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
        this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
    }

    componentDidMount() {
        console.log('inside Neighborhoods componentDidMount');
        this.fetchNeighborhoods();
    }

    fetchNeighborhoods() {
        console.log('inside fetchNeighborhoods');
        const brnchtkn = localStorage.getItem('brnchtkn');
        console.log('token from local storage: ', brnchtkn);
        fetcher({
            path: '/neighborhoods',
            method: 'GET',
            token: brnchtkn,
        })
        .then(neighborhoods => {
            this.setState({ neighborhoods: neighborhoods });
        });
    }

    updateNeighborhoods(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    render() {
        return (
            <div>
                <QuadrantViews quadrants={this.state.quadrants}/>
                <AllNeighborhoodsView neighborhoods={this.state.neighborhoods}/>
                <AddNeighborhoodForm quadrants={this.state.quadrants} updateNeighborhoods={this.updateNeighborhoods}/>
            </div>
        );
    }
}

export default Neighborhoods;


