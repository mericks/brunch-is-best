const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Restaurant = require('../models/restaurant');

router

    .get('/', (req, res, next) => {
        Restaurant.find().lean()
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Restaurant.findById(req.params.id).lean()
            .then(restaurant => res.send(restaurant))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Restaurant(req.body).save()
            .then(restaurant => res.send(restaurant))
            .catch(next);
    });

module.exports = router;
