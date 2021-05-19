const express = require('express');
const router = express.Router();
const queryPayment = require('../models/query-payment');

router.get('/query-payment/:paymentRef', async(req, res, next) => {
    const paymentRef = req.params.paymentRef;

    const payment = await queryPayment.findOne({paymentRef: paymentRef})

    if(payment) {
        return res.status(200).send(payment);
    } else {
        return res.status(404).send({
            message: 'Payment not found'
        })
    }
})
module.exports = router