import React, { Component } from 'react';
import fetcher from '../../helpers/fetcher';
import NeighborhoodsView from './NeighborhoodsView';
import QuadrantViewsMenu from './QuadrantViewsMenu';
// import QuadrantViews from './QuadrantViews';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';



class Neighborhoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neighborhoods: [],
            quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
            selectedQuadrant: 'View All',
            selectedView: [],
        };
        this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
        this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
        this.updateView = this.updateView.bind(this);
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

    updateView() {
        console.log('inside updateView')
        if(this.state.selectedQuadrant === 'View All') {
            this.setState({ selectedView: this.state.neighborhoods })
        } else {
            let updatedView = this.state.neighborhoods.filter(neighborhood => {
                return neighborhood.quadrant === this.state.selectedQuadrant
            })
            console.log('updatedView: ', updatedView);
            this.setState({ selectedView: updatedView})
        }
    }


  

    render() {
        return (
            <div>
                <QuadrantViewsMenu quadrants={this.state.quadrants}/>
                {/*<QuadrantViews selectedView={this.state.selectedView}/>*/}
                <NeighborhoodsView selectedView={this.state.selectedView}/>
                <AddNeighborhoodForm quadrants={this.state.quadrants} updateNeighborhoods={this.updateNeighborhoods}/>
            </div>
        );
    }
}

export default Neighborhoods;


