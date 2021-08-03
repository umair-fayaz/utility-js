const filter=require('./filter');

describe('Filter',() => {
    
    it('If array is [] and fucntion is x => true,then return []',() =>
    {
        expect(filter([],x => true)).toEqual([]);
    });

    it('If array is [1,2,3] and fucntion is x => true,then return [1,2,3]',() =>
    {
        expect(filter([1,2,3],x => true)).toEqual([1,2,3]);
    });

    it('If array is [1,2,3] and fucntion is x => false,then return []',() =>
    {
        expect(filter([1,2,3],x => false)).toEqual([]);
    });

    it('If array is [1,2,3] and fucntion is x => x>1,then return [2,3]',() =>
    {
        expect(filter([1,2,3],num => num>1 )).toEqual([2,3]);
    });

    it('If array is [a,B,c,D] and fucntion is toUpperCase,then return [B,D]',() =>
    {
        expect(filter(['a','B','c','D'],char => char==char.toUpperCase())).toEqual(['B','D']);
    });

});
