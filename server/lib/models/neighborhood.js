const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    quadrant: {
        type: String,
        enum: ['N', 'NE', 'NW', 'SE', 'SW'],
        required: true
    }
    
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);