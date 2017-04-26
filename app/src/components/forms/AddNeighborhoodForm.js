import React, { Component } from 'react';
import SingleInput from './formComponents/SingleInput';
import Select from './formComponents/Select';
import fetcher from '../../helpers/fetcher';

class AddNeighborhoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            // quadrant: ['N','NE', 'NW', 'SE', 'SW'],
            quadSelected: '',
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuadSelect = this.handleQuadSelect.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            name: this.state.name,
            quadrant: this.state.quadSelected,
        };

        fetcher({
            path: '/neighborhoods',
            method: 'POST',
            body: formPayload,
        })
        .then(neighborhood => this.props.updateNeighborhoods(neighborhood))
        .then(this.handleFormClear(e));
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleQuadSelect(e) {  
        this.setState({ quadSelected: e.target.value });
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            name: '',
            quadSelected: '',
        });
    }


    render() {
        return (
            <div>
                <hr />
                <h3>Add a Neighborhood</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                        name={'neighborhood'}
                        inputType={'text'}
                        content={this.state.name}
                        controlFunc={this.handleNameChange}
                        placeholder={'Neighborhood'} />
                    <Select
                        name={'quadrant'}
                        placeholder={'Select a quadrant'}
                        controlFunc={this.handleQuadSelect}
                        options={this.props.quadrants}
                        selectedOption={this.state.quadSelected} />
                    <input
                        type='submit'
                        value='Submit Neighborhood' />
                </form>
            </div>
        );
    }
}

export default AddNeighborhoodForm;
