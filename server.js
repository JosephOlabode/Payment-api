const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const error = require('./middleware/error')
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/PaymentDB';

mongoose.connect(connectionString, { useNewUrlParser: true, useFindAndModify: false,
    useCreateIndex: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log('db connection is on');
})

const app = express();
const server = http.createServer(app);

// enabling cors
app.use(cors());
app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', '*');
    next();
})

// enabling the server to take json payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// default response link upon hitting the api
app.use('/', (req, res) => {
    res.status(200).send({
        message: 'Payment server is working'
    })
});

app.use(error);
// declaring a port constant is it was not set in the process environment
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
})