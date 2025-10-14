function removeElement(nums: number[], val: number): number {
    let count:number = 0;
    for (let index = 0; index < nums.length; index++) {
        if (val !== nums[index]) {
            nums[count] = nums[index];
            count++
        }
    }
    return count;
};

let nums1 = [0,1,2,2,3,0,4,2]
let val = 2

console.log(removeElement(nums1,val));
