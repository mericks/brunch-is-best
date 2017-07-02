const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Review = require('../models/review');

router

    .get('/restaurant/:id', (req, res, next) => {
        const restaurantID = req.params.id;
        Review.find({ restaurant: restaurantID }).lean()
            .populate({
                path: 'reviewedBy',
                select: 'name.first name.last',
            })
            .then(reviews => res.send(reviews))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        req.body['reviewedBy'] = req.user.id;
        console.log('post review req.body: ', req.body);
        new Review(req.body).save()
            .then(review => res.send(review))
            .catch(next);
    });

module.exports = router;
