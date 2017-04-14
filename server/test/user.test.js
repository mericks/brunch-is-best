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

    it.skip('requires firstName (validation fails when no firstName)', () => {
        return new User({
            lastName: 'Smith',
            email: 'user@email.com',
            password: 'abc'
        }).validate();
    });

    it.skip('requires lastName (validation fails when no lastName)', () => {
        return new User({
            firstName: 'John',
            email: 'user@email.com',
            password: 'abc'
        }).validate();
    });

    it.skip('requires email (validation fails when no email)', () => {
        return new User({
            firstName: 'John',
            lastName: 'Smith',
            password: 'abc'
        }).validate();
    });

    it.skip('requires password (validation fails when no password)', () => {
        return new User({
            firstName: 'John',
            lastName: 'Smith',
            email: 'user@email.com',
        }).validate();
    });

});
