const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const app = require('../../lib/app');
const request = chai.request(app);



describe.only('Restaurants API Route Tests', () => {

    const restoUser = { name: { first: 'resto', last: 'user' }, email: 'resto@test.com', password: 'pword' };
    let token = '';
    let restoNabeID = '';
    let restoUserID = '';

    before(() => {
        return request.post('/api/auth/signup')
            .send(restoUser)
            .then(res => {
                token = res.body.token;
            })
            .then(() => {
                return request.get('/api/user')
                    .set('Authorization', token)
                    .then(res => res.body)
                    .then(user => restoUserID = user._id);
            })
            .then(() => {
                return request.post('/api/neighborhoods')
                    .send({ name: 'restoNabe', quadrant: 'SW' })
                    .set('Authorization', token)
                    .then(res => res.body)
                    .then(savedNabe => {
                        restoNabeID = savedNabe._id;
                    });
            });
    });

    // function saveResto(resto) {
    //     return request.post('/api/neighborhoods')
    //         .send(resto)
    //         .set('Authorization', token)
    //         .then(res => res.body);
    // }  
 

    it('GET /restaurants returns an empty array', () => {
        return request.get('/api/restaurants')
            .set('Authorization', token)
            .then(res => res.body)
            .then(restaurants => assert.deepEqual(restaurants, []));
    });

    it('POST /restaurants - Adds restaurant per Restaurant Schema', () => {

        let restoTest1 = {
            name: 'restoTest1',
            neighborhood: restoNabeID,
            address: {
                street: 'restoTest1Street',
                city: 'restoTest1City',
                zip: 12345,
            },
        };
        
        return request.post('/api/restaurants')
            .send(restoTest1)
            .set('Authorization', token)
            .then(res => res.body)
            .then(savedResto => {
                console.log('savedResto: ', savedResto);
                assert.ok(savedResto._id);
                restoTest1._id = savedResto._id;
                assert.equal(savedResto.name, restoTest1.name);
                assert.equal(savedResto.neighborhood, restoTest1.neighborhood);
                assert.equal(savedResto.address.street, restoTest1.address.street);
                assert.equal(savedResto.address.city, restoTest1.address.city);
                assert.equal(savedResto.address.zip, restoTest1.address.zip);
                assert.equal(savedResto.createdBy, restoUserID);
            });
    });


});
