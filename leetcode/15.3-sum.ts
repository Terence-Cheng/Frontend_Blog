/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    // 1.sort the array
    // 2.for loop the nums
    //   2.1 current num is the base target
    //   2.2 for loop the sub nums which start index is current index plus 1.
    //   2.3 start point, end point to get the negative base target. until find or the end point less than or equal the start point.
    // 3.Be careful, remove duplicate triplets.
    //   3.1 when for loop the nums, then compare the current num to the previous num.
    //   3.2 After getting the results of sub nums, remove duplicate triplets before push them to the final result.

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
                twoSumResult.push([startNum, endNum])
                startPoint++;
            }
        }

        return twoSumResult;
    }

    function areArraysEqual(arr1: number[], arr2: number[]) : boolean {
        return arr1.every((item, index) => {
            return item === arr2[index]
        })
    }

    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    const target = 0;

    for(let i = 0; i < nums.length - 2; i++) {
        if(i && nums[i] === nums[i - 1]) {
            continue;
        }
        const negativeBaseTarget = target - nums[i];
        const twoSumResults = twoSum(nums.slice(i + 1), negativeBaseTarget);

        twoSumResults.forEach(item => {
            const toAddArr = [nums[i], ...item];
            const isEqual = result.length && areArraysEqual(result[result.length - 1], toAddArr);
            if(!isEqual) {
                result.push(toAddArr)
            }
            
        });
    }

    return result;
};
// @lc code=end

