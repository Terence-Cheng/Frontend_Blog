/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let usedNumsObj = {}

    let result: number[] = []

    for(let index = 0; index < nums.length; index++) {
        const num = nums[index];

        const restTarget = target - num;

        if(usedNumsObj[restTarget] >= 0) {
            return [usedNumsObj[restTarget], index]
        }

        usedNumsObj[num] = index
    }

    return result;
};
// @lc code=end

