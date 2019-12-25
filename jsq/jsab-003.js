// File: jsab-003.js
// Question: 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// Example:
//   Input :  [1, 2, 3, 4, 2], 2
//   Output: [1,3, 4]

function remove(arr, item) {
    t = [];
    for (var i=0; i<arr.length; i++)
        if (arr[i] != item)
            t[t.length] = arr[i];
    return t;
}

console.log(remove([1,2,3,4,2], 2));
