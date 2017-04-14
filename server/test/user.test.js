const assert = require('chai').assert;
const User = require('../lib/models/user');

describe('User model', () => {

    it('accepts all fields', () => {
        return new User({
            firstName: 'John',
            lastName: 'Smith',
            email: 'user@email.com',
            password: 'abc'
        }).validate();
    });

    it('requires firstName (validation fails when no firstName)', () => {
        const user = new User({
            lastName: 'Smith',
            email: 'user@email.com',
            password: 'abc'
        });
        return user.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires lastName (validation fails when no lastName)', () => {
        const user = new User({
            firstName: 'John',
            email: 'user@email.com',
            password: 'abc'
        });
        return user.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires email (validation fails when no email)', () => {
        const user = new User({
            firstName: 'John',
            lastName: 'Smith',
            password: 'abc'
        });
        return user.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires password (validation fails when no password)', () => {
        const user = new User({
            firstName: 'John',
            lastName: 'Smith',
            email: 'user@email.com',
        });
        return user.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

});
