const min=require('./min');

describe('Minimum',() => {
    it('If array is [1,2,3,4],then return 1',() =>
    {
        expect(min([1,2,3,4])).toEqual(1);
    });
});