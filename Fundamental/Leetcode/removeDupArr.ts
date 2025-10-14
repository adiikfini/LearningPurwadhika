function removeDuplicates(nums: number[]): number{
    let count:number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index+1]) {
            nums[count] = nums[index];
            count++;
        }
        
    }
    console.log(nums);
    return count;
};
const nums2: number[]=[0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums2));

