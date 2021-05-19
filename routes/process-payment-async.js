const express = require('express');
const router = express.Router();
const processPayment = require('../models/process-payment');


router.post('/process-payment-async', async (req, res, next) => {
    const paymentDetails = req.body;
    if(paymentDetails.amount !== null && paymentDetails.clientId !== null && paymentDetails.narration !== null && paymentDetails.cardNumber !== null && paymentDetails.cvv !== null && paymentDetails.expiringDate !== null) {

    }
    else {
        return res.status(422).send({
            message: 'Unprocessable request or incomplete data supplied'
        })
    }
})