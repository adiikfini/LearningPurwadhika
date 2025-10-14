function searchInsert(nums: number[], target: number): number {
    let dex: number[] =[]
    let result:number =0;
    let G:boolean = false;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > target ) {
            dex[index] = target;
            return index;
        }else if(nums[index] !== target){
            G = true;
        }else{
            return index;
        }
    }
    if (G) {
        dex[nums.length] = target; 
        result = dex.length-1;
    }
    
    return result;
};

let nums = [1,3,5,6];
let target = 2;

console.log(searchInsert(nums,target));
