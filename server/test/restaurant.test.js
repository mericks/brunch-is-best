const assert = require('chai').assert;
const User = require('../lib/models/user');
const Neighborhood = require('../lib/models/neighborhood');
const Restaurant = require('../lib/models/restaurant');

describe('Restaurant model', () => {

    let user = new User({
        name: { first: 'John', last: 'Smith'},
        email: 'user@email.com',
        password: 'abc'
    });

    let nabe = new Neighborhood({
        name: 'Pearl District',
        quadrant: 'NW'
    });

    before(() => {
        user.save();
        nabe.save();
    });


    it('accepts all fields', () => {
        return new Restaurant({
            name: 'Test Restaurant',
            neighborhood: nabe._id,
            address: {
                street: '123 11th Ave',
                city: 'Portland',
                zip: '55555'
            },
            createdBy: user._id
        }).validate();
    });

    it('requires name (validation fails when no name)', () => {
        const resto = new Restaurant({
            neighborhood: nabe._id,
            address: {
                street: '123 11th Ave',
                city: 'Portland',
                zip: '55555'
            },
            createdBy: user._id
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires neighborhood ._id (validation fails when no neighborhood)', () => {
        const resto = new Restaurant({
            name: 'Test Restaurant',
            address: {
                street: '123 11th Ave',
                city: 'Portland',
                zip: '55555'
            },
            createdBy: user._id
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires address:street (validation fails when no address:street)', () => {
        const resto = new Restaurant({
            name: 'Test Restaurant',
            neighborhood: nabe._id,
            address: {
                city: 'Portland',
                zip: '55555'
            },
            createdBy: user._id
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires address:city (validation fails when no address:city)', () => {
        const resto = new Restaurant({
            name: 'Test Restaurant',
            neighborhood: nabe._id,
            address: {
                street: '123 11th Ave',
                zip: '55555'
            },
            createdBy: user._id
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires address:zip (validation fails when no address:zip)', () => {
        const resto = new Restaurant({
            name: 'Test Restaurant',
            neighborhood: nabe._id,
            address: {
                street: '123 11th Ave',
                city: 'Portland',
            },
            createdBy: user._id
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires createdBy ._id (validation fails when no createdBy ._id)', () => {
        const resto = new Restaurant({
            name: 'Test Restaurant',
            neighborhood: nabe._id,
            address: {
                street: '123 11th Ave',
                city: 'Portland',
                zip: '55555'
            }
        });
        return resto.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

});