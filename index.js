const { MONGODB_URI } = require('./utils/config');
const app = require('./app');

// 1. connect to the database
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');

        // 2. start the server
        app.listen(3002, () => {
            console.log('Server is running on port 3002');
        });
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));