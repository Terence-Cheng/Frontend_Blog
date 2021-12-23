/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    // 1.sort the array => [-1,0,1,2,-1,-4]
    // 2.for loop the nums => [-4, -1, -1, 0, 1, 2]
    //   2.1 current num is the base target, -4
    //   2.2 for loop the sub nums which start index is current index plus 1. => [-1, -1, 0, 1, 2]
    //   2.3 start point, end point to get the negative base target. until find or the end point less than or equal the start point.
    // 3.Be careful, remove duplicate triplets.
    //   3.1 when for loop the nums, then compare the current num to the previous num.
    //   3.2 After getting the results of sub nums, get the different num of start point and end point.
    // 4.Break the loop.
    //   because the array is sorted, so if the current num is greater than 0, so it's unnecessary to continue the loop.

    function twoSum( twoSumNums: number[], twoSumTarget: number): number[][] {
        const twoSumResult: number[][] = [];
        let startPoint = 0;
        let endPoint = twoSumNums.length - 1;

        while(startPoint < endPoint) {
            const startNum = twoSumNums[startPoint];
            const endNum = twoSumNums[endPoint];
            if(startNum + endNum > twoSumTarget) {
                endPoint--;
            } else if(startNum + endNum < twoSumTarget) {
                startPoint++;
            } else {
                twoSumResult.push([startNum, endNum]);
                while (startNum === twoSumNums[startPoint]) {
                    startPoint++;
                }
                while (endNum === twoSumNums[endPoint]) {
                    endPoint--;
                }
            }
        }

        return twoSumResult;
    }

    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    const target = 0;

    for(let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) break;
        if(i && nums[i] === nums[i - 1]) {
            continue;
        }
        const negativeBaseTarget = target - nums[i];
        const twoSumResults = twoSum(nums.slice(i + 1), negativeBaseTarget);

        twoSumResults.forEach(item => {
            result.push([nums[i], ...item]); 
        });
    }

    return result;
};
// @lc code=end

