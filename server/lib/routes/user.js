const router = require('express').Router();
const User = require('../models/user');

router

    .get('/', (req, res, next) => {
        // const id = req.user.id;
        User.findById(req.user.id)
            .select('_id name.first')
            .then(user => {
                if(!user) {
                    res.status(404).send({ error: 'user not found'});
                } else {
                    res.send(user);
                }
            })
            .catch(next);
    });

    // .get('/:id', (req, res, next) => {
    //     User.findById(req.params.id).lean()
    //         .then(user => res.send(user))
    //         .catch(next);
    // });

module.exports = router;
