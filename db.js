const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/PaymentDb';

mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false,
    useCreateIndex: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('db connection is on');
})