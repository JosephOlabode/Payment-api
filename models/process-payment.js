const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcessPaymentSchema = new Schema({
    amount: {type: Number, required: true},
    clientId: {type: Number, required: true},
    narration: {type: String, required: true},
    cardNumber: {type: String, required: true},
    cvv: {type: Number, required: true},
    expiringDate: {type: Date, required: true},
    paymentRef: {type: Date, required: true}
})

module.exports = mongoose.model('process-payment', ProcessPaymentSchema, 'Payments');