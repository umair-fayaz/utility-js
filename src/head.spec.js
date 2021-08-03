const head = require('./head');

describe('Head', () => {

    it('Empty array return undefined', () => {
        expect(head([])).toEqual(undefined);
    });

    it('Array is [1,2,3] return 1', () => {
        expect(head([1,2,3])).toEqual(1);
    });

})
