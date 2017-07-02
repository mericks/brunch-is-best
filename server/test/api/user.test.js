const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../../lib/app');
const request = chai.request(app);


describe('User API Route Test', () => {

    const testUser = { name: { first: 'test', last: 'user' }, email: 'user@test.com', password: 'pword' }
    let token = '';
    let testUserID = '';

    before(() => {
        return request.post('/api/auth/signup')
            .send(testUser)
            .then(res => {
                token = res.body.token;
                testUserID = res.user.id;
            });
    });

    it('GET /user - returns user first name and id', () => {
        return request.get('/api/user')
            .set('Authorization', token)
            .then(res => res.body)
            .then(savedUser => assert.deepEqual(savedUser, {
                _id: testUserID,
                name: {
                    first: testUser.name.first
                }
            }));
    });


});
