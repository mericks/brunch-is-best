const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Restaurant = require('../models/restaurant');
const Review = require('../models/review');

router

    .get('/', (req, res, next) => {
        Restaurant.find().lean()
            .populate('neighborhood createdBy')
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })

    .get('/abbrv', (req, res, next) => {
        Restaurant.find().lean()
            .populate('neighborhood')
            .select('name neighborhood')
            .then(restaurantsAbbrv => res.send(restaurantsAbbrv))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        const restaurantID = req.params.id;
        console.log('restaurantID from route: ', restaurantID);
        Restaurant.findById(restaurantID).lean()
            // .populate('address createdBy')
            .then(restaurant => res.send(restaurant))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        req.body['createdBy'] = req.user.id;
        new Restaurant(req.body).save()
            .then(restaurant => res.send(restaurant))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        const userID = req.user.id;
        const restaurantID = req.params.id;
        Promise.all([
            Restaurant.findById(restaurantID).lean(),
            Review.find({ restaurant: restaurantID }).lean(),
        ])
            .then(results => {
                const restaurant = results[0];
                const restaurantReviews = results[1];
                if (userID !== restaurant.createdBy) {
                    throw {
                        code: 401,
                        error: 'user not authorized to delete this restaurant',
                    };
                } else {
                    restaurant.remove();
                    restaurantReviews.remove();
                }
            })
            .then(response => {
                res.send({ removed: !!response });
            })
            .catch(next);
    });

module.exports = router;
