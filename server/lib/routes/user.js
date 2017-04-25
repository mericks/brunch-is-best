const router = require('express').Router();
// const bodyParser = require('body-parser').json();
const User = require('../models/user');

router

    .get('/:id', (req, res, next) => {
        // const id = req.user.id;
        User.findById(req.params.id).lean()
        // User.findById(id, '_id name.first name.last')  - to avoid sending email and hash
            .then(user => {
                if(!user) {
                    res.status(404).send({ error: 'user not found' });
                } else {
                    res.send(user);
                }
            })
            .catch(next);
    });

module.exports = router;
