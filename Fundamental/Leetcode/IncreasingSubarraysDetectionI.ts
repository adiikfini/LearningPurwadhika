function maxIncreasingSubarraysI(nums: number[], k: number): boolean {
    const n = nums.length;

    if (k < 1 || 2 * k > n) {
        return false;
    }

    for (let a = 0; a <= n - (2 * k); a++) {
        const b = a + k; 

        let isFirstSubarrayIncreasing = true;
        for (let i = 0; i < k - 1; i++) {
            if (nums[a + i] >= nums[a + i + 1]) {
                isFirstSubarrayIncreasing = false;
                break;
            }
        }

        if (isFirstSubarrayIncreasing) {
            let isSecondSubarrayIncreasing = true;
            for (let i = 0; i < k - 1; i++) {
                if (nums[b + i] >= nums[b + i + 1]) {
                    isSecondSubarrayIncreasing = false;
                    break;
                }
            }

            if (isSecondSubarrayIncreasing) {
                return true;
            }
        }
    }

    return false;
}
const nums1 = [1,2,3,4,4,4,4,5,6,7];
const k =3;
console.log(maxIncreasingSubarraysI(nums1,k));
