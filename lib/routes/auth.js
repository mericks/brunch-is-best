const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');
const tokenService = require('../auth/token-service');
const ensureAuth = require('../auth/ensure-auth')();

function hasEmailAndPassword(req, res, next) {
    const user = req.body;
    if(!user.email || !user.password) {
        return next({
            code: 400,
            error: 'email and password are required'
        });
    }
    next();
}


router

    .get('/verify', ensureAuth, (req, res) => {
        res.send({ valid: true });
    })

    .post('/signup', bodyParser, hasEmailAndPassword, (req, res, next) => {
        const input = req.body;
        delete req.body;

        User.find({ email: input.email }).count()
            .then(count => {
                if(count > 0) throw {
                    code: 400,
                    error: `a user with email address ${input.email} already exists`
                };

                return new User(input).save();
            })
            .then(user => tokenService.sign(user))
            .then(token => res.send({ token }))
            .catch(next);
    })

    .post('/signin', bodyParser, hasEmailAndPassword, (req, res, next) => {
        const input = req.body;
        delete req.body;

        User.findOne({ email: input.email })
            .then(user => {
                if(!user || !user.comparePassword(input.password)) {
                    throw {
                        code: 400,
                        error: 'invalid email address or password'
                    };
                }

                return user;
            })
            .then(user => tokenService.sign(user))
            .then(token => res.send({ token }))
            .catch(next);
    });

module.exports = router;
