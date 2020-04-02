var singleNumber = function(nums) {
    var single = -1;
    var str = nums + "";
    nums.forEach(element =>{
        var first = str.indexOf(`${element}`);
        var last = str.lastIndexOf(`${element}`);
        if(first === last){
            single = element;
        }
    });
    return single;
};