const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = function(dbUri) {
    const promise = mongoose.connect(
        dbUri,
        { useNewUrlParser: true }
    );

    const db = mongoose.connection;

    db.on('connected', () =>
        console.log('Mongoose default connection open to ' + dbUri)
    );

    db.on('error', err =>
        console.log('Mongoose default connection error: ' + err)
    );

    db.on('disconnected', () =>
        console.log('Mongoose default connection disconnected')
    );

    process.on('SIGINT', () => {
        db.close(() =>
            console.log(
                'Mongoose default connection disconnected through app termination'
            )
        );
        process.exit(0);
    });

    return promise;
};
