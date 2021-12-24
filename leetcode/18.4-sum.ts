/*
 * @lc app=leetcode id=18 lang=typescript
 *
 * [18] 4Sum
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    /* 
    1. sort => [-2, -1, 0, 0, 1, 2]
    2. for loop the sorted array.
    3. then transform it to the 3 sum.
    */

    // todo use curry funtion to optimize it.

    function getStartPoint(nums: number[], baseNum: number, index): number {
        while(baseNum === nums[index]) {index++;}

        return index;
    }

    function getEndPoint(nums: number[], baseNum: number, index): number {
        while(baseNum === nums[index]) {index--;}

        return index;
    }

    type AnySum = (nums: number[], target: number) => number[][]

    const twoSum: AnySum = (nums, target) => {
        const result: number[][] = [];

        let start = 0, end = nums.length - 1;

        while(start < end) {
            const startNum = nums[start];
            const endNum = nums[end];

            if(startNum + endNum === target) {
                result.push([startNum, endNum]);
                start = getStartPoint(nums, startNum, start + 1);
                end = getEndPoint(nums, endNum, end - 1);
            } else if (startNum + endNum < target) {
                start = getStartPoint(nums, startNum, start + 1);
            } else {
                end = getEndPoint(nums, endNum, end - 1);
            }
        }

        return result;
    }

    const threeSum: AnySum = (nums, target) => {
        const result: number[][] = []
        for(let i = 0; i < nums.length; i++) {

            if(i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            const twoSumResult = twoSum(nums.slice(i + 1), target - nums[i]);

            twoSumResult.forEach(item => {
                result.push([nums[i], ...item])
            })
        }

        return result;
    }

    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 3; i++) {

        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const sumResult = threeSum(nums.slice(i + 1), target - nums[i]);

        sumResult.forEach(item => {
            result.push([nums[i], ...item])
        })
    }

    return result;
};
// @lc code=end

