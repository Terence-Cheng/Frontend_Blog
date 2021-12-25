/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    // sort and two pointers.
    // similar to the 3sum.

    let result: number = Infinity;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        let startPoint = i + 1, endPoint = nums.length - 1;

        while(startPoint < endPoint) {
            const currentSum = nums[startPoint] + nums[endPoint] + nums[i];
            if(currentSum > target) {
                endPoint--;
            } else if (currentSum < target) {
                startPoint++;
            } else {
                return target;
            }

            if( Math.abs(target - currentSum) < Math.abs(target - result) ) {
                result = currentSum;
            }
        }
    }

    return result;
};
// @lc code=end

