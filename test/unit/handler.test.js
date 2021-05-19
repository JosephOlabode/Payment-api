const handler = require('../../controllers/helpers');

describe('Determin Payment gateway', () => {
    it('should use to amount to return the appropriate payment gateway', async() => {
        const amount = 190000;
        const result = await handler.determinePaymentGateway(amount);

        expect(result).toBe('Cheap Payment Gateway');
    })
})