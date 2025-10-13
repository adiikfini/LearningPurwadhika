/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */
var twoSum = function(nums: number[], target: number) {
    for (let index = 0; index < nums.length; index++) {
        for (let j = index+1; j < nums.length; j++) {
            if ((nums[index] + nums[j]) === target) {
                return [index , j];
            }
        }
    }
    return [];
};
let nums: number[] = [2,5,5,11];
let target: number = 10;
console.log(twoSum(nums, target));
