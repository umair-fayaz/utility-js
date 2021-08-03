const map=require('./map');
describe('Map',() =>
{
    it('If array is empty and function is cube,then return []',() =>
    {
        expect(map([],(num) => Math.pow(num,3))).toEqual([]);
    });

    it('If array is [1,2,3] and function is identity,then return [1,2,3]',() =>
    {
        expect(map([1,2,3],(num) => num)).toEqual([1,2,3]);
    });

    it('If array is [1,2,3] and function is cube,then return [1,8,27]',() =>
    {
        expect(map([1,2,3],(num) => Math.pow(num,3))).toEqual([1,8,27]);
    });

   it('If Object is a{x : 10} and function is identity ,then return [11]',() =>
    {
        expect(map([a={x : 10}],a => a.x + 1)).toEqual([11]);
    });

    it('If If Object is a{x : 10} and function is cube,then return [1001]',() =>
    {
        expect(map([a={x : 10}],a => Math.pow(a.x,3) + 1)).toEqual([1001]);
    });
    
});
