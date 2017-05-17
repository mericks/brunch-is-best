import React, { Component } from 'react';
import Select from './formComponents/Select';
import TextArea from './formComponents/TextArea';
import reviewService from '../../services/review-service';


class AddReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ratings: [ '5 - Top notch', '4 - Good, if somewhat boring', '3 - Your typical brunch', '2 - Not a repeat', '1 - So poor, words escape me...'],
            ratings: [ '5', '4', '3', '2', '1'],
            ratingSelected: '',
            comment: '',
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            restaurant: this.props.selectedRestaurant._id,
            reviewDate: Date.now(),
            ratingValue: this.state.ratingSelected,
            comment: this.state.comment,
        };

        reviewService.addNew(formPayload)
        .then(review => this.props.addReview(review))
        .then(this.handleFormClear(e));
    }

    handleRating(e) {
        this.setState({ ratingSelected: e.target.value });
    }

    handleTextArea(e) {
        this.setState({ comment: e.target.value });
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
                <h3>Share your review for {this.props.selectedRestaurant.name}</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <Select
                        name={'rating'}
                        placeholder={'Rate your experience'}
                        controlFunc={this.handleRating}
                        options={this.state.ratings}
                        selectedOption={this.state.ratingSelected} />
                    <TextArea
                        rows={5}
                        resize={true}
                        content={this.state.comment}
                        name={'reviewComment'}
                        controlFunc={this.handleTextArea}
                        placeholder={'Share your review here. Remember to be specific!'} />
                    <input
                        type='submit'
                        value='Submit Review' />
                </form>
            </div>
        );
    }
}

export default AddReviewForm;
