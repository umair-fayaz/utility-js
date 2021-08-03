const reduce=require('./reduce');
describe('Reduce',() => {

    it('If array is [] ,function is (x,y)=>x+y, then return undefined',() =>
    {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('If array is [] ,function is (x,y)=>x+y and initailValue is 10, then return 10',() =>
    {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it('If array is [a,b,c] ,function is (x,y)=>x+y, then return abc',() =>
    {
        expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });

    it('If array is [a,b,c] ,function is (x,y)=>x+y and initialValue is z, then return zabc',() =>
    {
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc');
    });
});
