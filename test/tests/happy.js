
import paypal from 'src/index';

describe('paypal happy cases', () => {

    it('should export paypal.Checkout and paypal.Button', () => {

        assert.ok(paypal.Checkout);
        assert.ok(paypal.Button);
    });
});
