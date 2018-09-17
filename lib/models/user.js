const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({

    name: {

        first: {
            type: String,
            required: true
        },

        last: {
            type: String,
            required: true
        }
    },

    email: {
        type: String,
        required: true
    },

    hash: {
        type: String,
        required: true
    }

});

userSchema.virtual('password').set(function(password) {
    this.hash = bcrypt.hashSync(password, 8);
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash);
};

module.exports = mongoose.model('User', userSchema);
