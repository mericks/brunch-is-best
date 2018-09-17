const assert = require('chai').assert;
const User = require('../../lib/models/user');
const Neighborhood = require('../../lib/models/neighborhood');
const Restaurant = require('../../lib/models/restaurant');
const Review = require('../../lib/models/review');

describe('Review model', () => {

    let user = new User({
        name: { first: 'John', last: 'Smith'},
        email: 'user@email.com',
        password: 'abc'
    });

    let nabe = new Neighborhood({
        name: 'Pearl District',
        quadrant: 'NW'
    });

    let resto = new Restaurant({
        name: 'Test Restaurant',
        neighborhood: nabe._id,
        address: {
            street: '123 11th Ave',
            city: 'Portland',
            zip: '55555'
        },
        createdBy: user._id
    });

    before(() => {
        user.save();
        nabe.save();
        resto.save();
    });

    it('accepts all fields', () => {
        return new Review({
            restaurant: resto._id,
            reviewedBy: user._id,
            ratingValue: '1',
            comment: 'This is a test comment.'
        }).validate();
    });

    it('requires restaurant ._id (validation fails when no restaurant ._id)', () => {
        const review = new Review({
            reviewedBy: user._id,
            ratingValue: '1',
            comment: 'This is a test comment.'
        });
        return review.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires reviewedBy ._id (validation fails when no reviewedBy ._id)', () => {
        const review = new Review({
            restaurant: resto._id,
            ratingValue: '1',
            comment: 'This is a test comment.'
        });
        return review.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires rating value (validation fails when no rating value)', () => {
        const review = new Review({
            restaurant: resto._id,
            reviewedBy: user._id,
            comment: 'This is a test comment.'
        });
        return review.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('does not require comment', () => {
        return new Review({
            restaurant: resto._id,
            reviewedBy: user._id,
            ratingValue: '1',
        }).validate();
    });

    it('accepts ratingValue of "1", "2", "3", "4", "5"', () => {
        const ratings = ['1', '2', '3', '4', '5'];
        ratings.map(rating => new Review({ 
            restaurant: resto._id,
            reviewedBy: user._id,
            ratingValue: rating,
            comment: 'This is a test comment.'
        }).validate());
        return Promise.all(ratings);
    });

    it('fails validation for non-accepted ratingValue', () => {
        const review = new Review({
            restaurant: resto._id,
            reviewedBy: user._id,
            ratingValue: '22',
            comment: 'This is a test comment.'
        });
        review.validate()
            .then(
                () => { throw new Error('validation should not pass'); },
                err => assert.isNotNull(err)
            );
    });

});
