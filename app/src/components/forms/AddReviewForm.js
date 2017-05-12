import React, { Component } from 'react';
import SingleInput from './formComponents/SingleInput';
import TextArea from './formComponents/TextArea';
// import reviewService from '../../services/review-service';


class AddReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRestaurant: props.selectedRestaurant,
            ratingValue: '',
            comment: '',
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
    }

    componentDidMount() {
        // hold
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            restaurant: this.state.selectedRestaurant,
            // reviewedBy to be handled on backend,
            reviewDate: newDate(),
            ratingValue: this.state.ratingValue,
            comment: this.state.comment,
        };

        console.log('addReview formPayload to be sent to DB: ', formPayload);

        reviewService.addNew(formPayload)
        .then(review => this.props.addReview(review))
        .then(this.handleFormClear(e));
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleFormClear(e) {
        e.preventDefault();
        this.setState({
            ratingValue: '',
            comment: '',
        });
    }

    render(props) {
        return (
            <div>
                <hr />
                <h3>Add a Review for {selectedRestaurant.name}</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                        name={'rating'}
                        inputType={'number'}
                        content={this.state.ratingValue}
                        controlFunc={this.handleChange}
                        placeholder={'Rating from 1 - 5'} />
                    <TextArea
                        title={'Share your review here:'}
                        rows={5}
                        resize={true}
                        content={this.state.comment}
                        name={'reviewComment'}
                        controlFunc={this.handleChange}
                        placeholder={'Remember to be specific!'} />
                    <input
                        type='submit'
                        value='Submit Review' />
                </form>
            </div>
        );
    }
}

export default AddReviewForm;
