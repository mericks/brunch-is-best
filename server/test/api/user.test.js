const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../../lib/app');
const request = chai.request(app);


// Testing Data & Function
let testUser = {
    name: { first: 'Test', last: 'User' },
    email: 'testuser@email.com',
    password: 'abc',
};

function saveUser(user) {
    return request.post('/api/auth/signup')
        .send(user)
        .then(res => res.body);
}  
// End Testing Data & Function


describe('User API Route Tests', () => {

    it('GET /user/:id returns testUser with selected fields', () => {
        saveUser(testUser);
        console.log(testUser._id);
        return request.get(`/api/user/${testUser._id}`)
            .then(res => res.body)
            .then(user => assert.deepEqual(user.email, testUser.email));
    });

});
