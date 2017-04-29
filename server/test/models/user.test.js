const assert = require('chai').assert;
const User = require('../../lib/models/user');

describe('User model', () => {


    it('accepts all fields', () => {
        return new User({
            name: { first: 'John', last: 'Smith' },
            email: 'user@email.com',
            password: 'abc'
        }).validate();
    });

    it('sets hash from password and correctly compares', () => {
        const hashTestUser = {
            name: { first: 'Jane', last: 'Smith'},
            email: 'hashTestUser@email.com',
            password: 'hashtest'
        };
        const user = new User(hashTestUser);

        assert.isUndefined(user.password);
        assert.notEqual(user.hash, hashTestUser.password);

        assert.isTrue(user.comparePassword('hashtest'));
        assert.isFalse(user.comparePassword('not the password'));
    });

    it('requires firstName (validation fails when no firstName)', () => {
        const user = new User({
            name: { last: 'Smith' },
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
            name: { first: 'John' },
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
            name: { first: 'John', last: 'Smith' },
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
            name: { first: 'John', last: 'Smith' },
            email: 'user@email.com',
        });
        return user.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

});
