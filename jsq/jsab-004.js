// jsab-004.js
// Description:
//  1. 移除数组中的元素
//  2. 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
//  3. 示例
//    3.1 input:  [1, 2, 2, 3, 4, 2, 2], 2
//    3.2 output: [1, 3, 4]

function removeWithoutCopy(arr, item) {
    idx = [];
    for(var i=0; i<arr.length; i++)
        if (arr[i] == item)
            idx[idx.length] = i;
    
    idx.reverse();
    for(var j=0; j<idx.length; j++)
        arr.splice(idx[j], 1);

    return arr;
}

arrobj = [1, 2, 2, 3, 4, 2, 5, 2];
item = 2;
removeWithoutCopy(arrobj,item);

console.log(arrobj);