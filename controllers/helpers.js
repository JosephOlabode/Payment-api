function determinePaymentGateway(amount) {
    if(amount < 200000)
        return 'Cheap Payment Gateway';
    else if(amount >200000 && amount <= 500000)
        return 'Expensive Payment Gateway';
    else
        return 'Premium Payment Gateway'
}

module.exports = {
    determinePaymentGateway
}