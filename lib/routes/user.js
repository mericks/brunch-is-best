const router = require('express').Router();
const User = require('../models/user');

router

    .get('/', (req, res, next) => {
        const userID = req.user.id;
        User.findById(userID)
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

module.exports = router;
