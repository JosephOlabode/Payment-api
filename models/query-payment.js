const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuerySchema = new Schema({
    statusCode: {type: String, required: true},
    message: {type: String, required: true},
    paymentRef: {type: String, required: true},
    processTimeStamp: {type: Date, default: Date.now},
    amountPaid: {type: Number, required: true}
})


module.exports = mongoose.model('Query', QuerySchema, 'Query payment');