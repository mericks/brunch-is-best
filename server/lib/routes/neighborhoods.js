const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Neighborhood = require('../models/neighborhood');

router

    .get('/', (req, res, next) => {
        Neighborhood.find().lean()
            .then(neighborhoods => res.send(neighborhoods))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Neighborhood.findById(req.params.id).lean()
            .then(neighborhood => res.send(neighborhood))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Neighborhood(req.body).save()
            .then(neighborhood => res.send(neighborhood))
            .catch(next);
    });

module.exports = router;
