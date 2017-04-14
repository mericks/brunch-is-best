const assert = require('chai').assert;
const Neighborhood = require('../lib/models/neighborhood');

describe('Neighborhood model', () => {

    it('accepts all fields', () => {
        return new Neighborhood({
            name: 'Pearl District',
            quadrant: 'NW'
        }).validate();
    });

    it('requires name (validation fails when no name)', () => {
        const nabe = new Neighborhood({
            quadrant: 'NW'
        });
        return nabe.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('requires quadrant (validation fails when no quadrant)', () => {
        const nabe = new Neighborhood({
            name: 'Pearl District'
        });
        return nabe.validate()
            .then(
                () => { throw new Error('validation should not have passed'); },
                err => assert.isNotNull(err)
            );
    });

    it('accepts "N", "NE", "NW", "SE", "SW" as quadrants', () => {
        const quadrants = ['N', 'NE', 'NW', 'SE', 'SW'];
        quadrants.map(quad => new Neighborhood({ name: quad, quadrant: quad }).validate());
        return Promise.all(quadrants);
    });

    it('fails validation for non-accepted quadrant', () => {
        const nabe = new Neighborhood({
            name: 'Pearl District',
            quadrant: 'S'
        });
        nabe.validate()
            .then(
                () => { throw new Error('validation should not pass'); },
                err => assert.isNotNull(err)
            );
    });

});
