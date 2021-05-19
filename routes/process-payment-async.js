const express = require('express');
const router = express.Router();
const processPayment = require('../models/process-payment');
const queryPayment = require('../models/query-payment');
const helperFunction = require('../controllers/helpers');


router.post('/process-payment-async', async (req, res, next) => {
    const paymentDetails = req.body;
    if(paymentDetails.amount !== null && paymentDetails.clientId !== null && paymentDetails.narration !== null && paymentDetails.cardNumber !== null && paymentDetails.cvv !== null && paymentDetails.expiringDate !== null) {
        const paymentGateway = helperFunction.determinePaymentGateway(paymentDetails.amount);
        const checkCardNumber = helperFunction.checkIfCardNumberIs16(paymentDetails.cardNumber);
        if(checkCardNumber) {
            const uniqueReference = Math.random().toString(36).substring(7);
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
                    return next(err);
                }
            })

            const queryObject = {
                statusCode: '00',
                message: 'success',
                paymentRef: uniqueReference,
                amountPaid: paymentDetails.amount,
                paymentGateway: paymentGateway
            }
            const query  = new queryPayment(queryObject)

            query.save((err) => {
                if(err)
                    return next(err);
            })

            return res.status(200).send(queryObject);
        } else {
            return res.status(422).send({
                message: 'Invalid card Number'
            })
        }
    }
    else {
        return res.status(422).send({
            message: 'Unprocessable request or incomplete data supplied'
        })
    }
})

module.exports = router;