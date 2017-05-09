import React, { Component } from 'react';
import NeighborhoodService from '../../services/neighborhood-service';
import QuadrantViewNav from './QuadrantViewNav';
import NeighborhoodsView from './NeighborhoodsView';
import NeighborhoodRestaurants from './NeighborhoodRestaurants';
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
        this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
        this.updateView = this.updateView.bind(this);
    }

    componentDidMount() {
        NeighborhoodService.getAll()
            .then(neighborhoods => this.setState({ neighborhoods }))
            .then(() => this.updateView(this.state.selectedQuadrant));
    }

    updateNeighborhoods(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    updateView(quadrant) {
        this.setState({ selectedQuadrant: quadrant });
        if(quadrant === 'View All') {
            this.setState({ selectedView: this.state.neighborhoods })
        } else {
            let updatedView = this.state.neighborhoods.filter(neighborhood => {
                return neighborhood.quadrant === quadrant
            })
            this.setState({ selectedView: updatedView})
        }
    }


    render() {
        return (
            <div>
                <QuadrantViewNav quadrants={this.state.quadrants} updateView={this.updateView}/>
                <NeighborhoodsView selectedView={this.state.selectedView}/>
                <AddNeighborhoodForm quadrants={this.state.quadrants} updateNeighborhoods={this.updateNeighborhoods}/>
                <NeighborhoodRestaurants />
            </div>
        );
    }
}

export default Neighborhoods;


