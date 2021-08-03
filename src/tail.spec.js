const tail = require('./tail');

describe('Tail', () => {

    it('If array is empty ,then return undefined', () => {
        expect(tail([])).toEqual([]);
    });

    it('If array is [1,2,3] ,then return [2,3]', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

})
