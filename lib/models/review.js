const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },

    reviewedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    reviewDate: {
        type: Date,
        default: Date.now,
        required: true
    },

    ratingValue: {
        type: Number,
        enum: ['1', '2', '3', '4', '5'],
        required: true
    },

    comment: {
        type: String
    }

});

module.exports = mongoose.model('Review', reviewSchema);