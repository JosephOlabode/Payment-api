const handler = require('../../controllers/helpers');

describe('Determine Payment gateway', () => {
    it('should use to amount to return the appropriate payment gateway', async() => {
        const amount = 190000;
        const result = await handler.determinePaymentGateway(amount);

        expect(result).toBe('Cheap Payment Gateway');
    })
});

describe('Check if Card number is 16', () => {
    it('should return true or false if card number is 16 or not', async () => {
        const cardNumber = "1234567";
        const result = await handler.checkIfCardNumberIs16(cardNumber);

        expect(result).toBe(false);
    })
})