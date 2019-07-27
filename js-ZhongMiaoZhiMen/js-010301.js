// 1.3 JavaScript自带函数 - 数学
// 用户自己手写查找最大值的代码

var nums = [3,342,23,22,124], max=0;
for (var i=0; i<nums.length;i++)
	if (nums[i] > max)
		max = nums[i];
console.log('max val: ' + max);
