import React, { Component } from 'react';
import SingleInput from './formComponents/SingleInput';
// import Select from './formComponents/Select';
import restaurantService from '../../services/restaurant-service';


class AddRestaurantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neighborhoods: props.neighborhoods,
            selectedNeighborhood: props.selectedNeighborhood,

            name: '',
            neighborhood: '',
            streetAddress: '',
            cityAddress: '',
            zipAddress: '',
            // createdBy: props.user._id => added on on backend
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
    }

    componentDidMount() {
        // this.setNeighborhoodOpts();
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            name: this.state.name,
            neighborhood: this.state.neighborhood,
            addres: {
                street: this.state.streetAddress,
                city: this.state.cityAddress,
                zip: this.state.zipAddress,
            },
        };

        console.log('addResto formPayload to be sent to DB: ', formPayload);

        restaurantService.addNew(formPayload)
        .then(restaurant => this.props.addRestaurant(restaurant))
        .then(this.handleFormClear(e));
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            name: '',
            neighborhood: '',
            streetAddress: '',
            cityAddress: '',
            zipAddress: '',
        });
    }

    // setNeighborhoodOpts() {
    //     let quadrantOpts = this.props.quadrants.slice();
    //     let idx = quadrantOpts.indexOf('View All');
    //     if(idx !== -1) {
    //         quadrantOpts.splice(idx, 1);
    //     }
    //     this.setState({ quadrantOpts: quadrantOpts });
    // }


    render(props) {
        return (
            <div>
                <hr />
                <h3>Add a Restaurant</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                        name={'name'}
                        inputType={'text'}
                        content={this.state.name}
                        controlFunc={this.handleChange}
                        placeholder={'Restaurant'} />
                    {/*<Select
                        name={'neighborhood'}
                        placeholder={this.state.selectedNeighborhood}
                        controlFunc={this.handleNeihborhoodSelect}
                        options={this.state.neighborhoods}
                        selectedOption={this.state.selectedNeighborhood} />*/}
                    <SingleInput
                        name={'streetAddress'}
                        inputType={'text'}
                        content={this.state.streetAddress}
                        controlFunc={this.handleChange}
                        placeholder={'Street Address'} />
                    <SingleInput
                        name={'cityAddress'}
                        inputType={'text'}
                        content={this.state.cityAddress}
                        controlFunc={this.handleChange}
                        placeholder={'City'} />
                    <SingleInput
                        name={'zipAddress'}
                        inputType={'text'}
                        content={this.state.zipAddress}
                        controlFunc={this.handleChange}
                        placeholder={'Zip'} />
                    <input
                        type='submit'
                        value='Submit Restaurant' />
                </form>
            </div>
        );
    }
}

export default AddRestaurantForm;
