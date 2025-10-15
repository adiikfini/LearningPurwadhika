function maxIncreasingSubarrays(nums: number[]): number {
    const n = nums.length;
    if (n < 2) {
        return 0; 
    }

    const check = (k: number): boolean => {
        if (k === 0) return true; 
        if (k * 2 > n) return false; 

        const leftCounts = new Array(n).fill(1);
        for (let i = 1; i < n; i++) {
            if (nums[i] > nums[i - 1]) {
                leftCounts[i] = leftCounts[i - 1] + 1;
            }
        }

        const rightCounts = new Array(n).fill(1);
        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] < nums[i + 1]) {
                rightCounts[i] = rightCounts[i + 1] + 1;
            }
        }
        for (let i = 0; i < n - 1; i++) {
            if (leftCounts[i] >= k && rightCounts[i + 1] >= k) {
                return true;
            }
        }
        return false;
    };

    // --- Algoritma Binary Search Utama ---
    let low = 0;
    let high = Math.floor(n / 2); // k maksimum tidak bisa lebih dari n/2
    let maxFoundK = 0;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (check(mid)) {
            maxFoundK = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return maxFoundK;
}
let nums = [1,2,3,4,4,4,4,5,6,7];
console.log(maxIncreasingSubarrays(nums));
