const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/PaymentDb';

mongoose.connect(connectionString, () => {
    console.log('db is connected successfully');
})

mongoose.connection.on('connected', () => {
    console.log('db connection is on');
})