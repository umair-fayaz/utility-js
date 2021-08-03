const reduce=(array,func,initalValue) => {
    if(array.length==0 && initalValue==undefined) return undefined;
    else if(initalValue==undefined) return array.reduce(func);
    else  return array.reduce(func,initalValue);
};
module.exports=reduce;