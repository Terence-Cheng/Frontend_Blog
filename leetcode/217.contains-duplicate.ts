/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {

    const recordSet: Set<number> = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(recordSet.has(nums[i])) {
            return true;
        }
        recordSet.add(nums[i])
    }

    return false;
};
// @lc code=end

