const express = require('express');
const router = express.Router();
const queryPayment = require('../models/query-payment');

router.get('query-payment/:paymentRef', (req, res, next) => {
    const paymentRef = req.params.paymentRef;



})
module.exports = router