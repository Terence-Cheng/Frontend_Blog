/*
 * @lc app=leetcode id=220 lang=typescript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
function containsNearbyAlmostDuplicate(nums: number[], k: number, t: number): boolean {
    /* 
        abs(nums[i] - nums[j]) <= t && abs(i - j) <= k

        [i, j - 1]

        Sliding the window
            when the new value comes in, compare all the previous values.

            If false, j++;

            if(j - i > k ) i++;
    */

    let i = 0, j = 0;

    const { length } = nums;

    while(j < length) {
        for(let m = i; m < j; m++) {
            if(Math.abs(nums[j] - nums[m]) <= t) return true
        }

        j++;

        if(j - i > k) i++;
    }

    return false;
};
// @lc code=end

