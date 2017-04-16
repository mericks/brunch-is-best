





////////////////////////////////
const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Contact = require('../models/contact');

router

    .get('/', (req, res, next) => {
        Contact.find().lean()
            .then(contacts => res.send(contacts))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Contact.findById(req.params.id).lean()
            .then(contact => res.send(contact))
            .catch(next);
    })

    .post('/', bodyParser, (req, res, next) => {
        new Contact(req.body).save()
            .then(contact => res.send(contact))
            .catch(next);
    });

    // TODO: GET to /contacts?category=work:


module.exports = router;