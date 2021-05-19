const express = require('express');
const router = express.Router();
const processPayment = require('../models/process-payment');
const queryPayment = require('../models/query-payment');
const uuid = require('uuid');


router.post('/process-payment-async', async (req, res, next) => {
    const paymentDetails = req.body;
    if(paymentDetails.amount !== null && paymentDetails.clientId !== null && paymentDetails.narration !== null && paymentDetails.cardNumber !== null && paymentDetails.cvv !== null && paymentDetails.expiringDate !== null) {
        const paymentGateway = determinePaymentGateway(paymentDetails.amount);
        const uniqueReference = uuid();
        const payload = new processPayment({
            amount: paymentDetails.amount,
            clientId: paymentDetails.clientId,
            narration: paymentDetails.narration,
            cardNumber: paymentDetails.cardNumber,
            cvv: paymentDetails.cvv,
            expiringDate: paymentDetails.expiringDate,
            paymentRef: paymentDetails.paymentRef
        });

        payload.save((err) => {
            if(err) {

            }
        })
    }
    else {
        return res.status(422).send({
            message: 'Unprocessable request or incomplete data supplied'
        })
    }
})

function determinePaymentGateway(amount) {
    if(amount < 200000)
        return 'Cheap Payment Gateway';
    else if(amount >200000 && amount <= 500000)
        return 'Expensive Payment Gateway';
    else
        return 'Premium Payment Gateway'
}