import React, { Component } from 'react';
import SingleInput from './formComponents/SingleInput';
import Select from './formComponents/Select';
import fetcher from '../../helpers/fetcher';


class AddNeighborhoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quadSelected: '',
            quadrantOpts: [],
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleQuadSelect = this.handleQuadSelect.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.setQuadrantOpts = this.setQuadrantOpts.bind(this);
    }

    componentDidMount() {
        this.setQuadrantOpts();
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

    setQuadrantOpts() {
        let quadrantOpts = this.props.quadrants.slice();
        let idx = quadrantOpts.indexOf('View All');
        console.log(idx);
        if(idx !== -1) {
            quadrantOpts.splice(idx, 1);
        }
        this.setState({ quadrantOpts: quadrantOpts });
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
                        options={this.state.quadrantOpts}
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
