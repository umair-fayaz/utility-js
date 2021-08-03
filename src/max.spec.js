const max=require('./max');

describe('Maximum',() => {
    it('If array is [1,2,3,4],then return 4',() =>
    {
        expect(max([1,2,3,4])).toEqual(4);
    });
});