const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const User = require('./user');
// const Neighborhood = require('./neighborhood');

const restaurantSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    neighborhood: {
        type: Schema.Types.ObjectId,
        ref: 'Neighborhood',
        required: true
    },

    address: {

        street: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true
        },

        zip: {
            type: Number,
            required: true
        }
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 

});

module.exports = mongoose.model('Restaurant', restaurantSchema);