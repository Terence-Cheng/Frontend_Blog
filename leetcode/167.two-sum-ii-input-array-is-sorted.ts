/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    // two pointers
    let l = 0;
    let r = numbers.length - 1;
    while(true) {
        if(numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1]
        }
        if(numbers[l] + numbers[r] > target) {
            r--
        } else {
            l++
        }
    }
};
// @lc code=end

