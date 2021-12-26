/*
 * @lc app=leetcode id=454 lang=typescript
 *
 * [454] 4Sum II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    /* 
     1. Combine nums3 with nums4 to a finding map, getting the combination of all possible additions.
        [1,2], [3,4] => {4: 1, 5: 2, 6: 1} 
        key is the result of plus, value is the count.
     2. Double for loop the nums1 and nums2, then seek into the finding map.   


     Time complexity: O(n^2)
     Memory complexity: O(n^2)
    */

    interface Record {
        [props: number]: number
    }

    const record: Record = {};

    let answer: number = 0;

    nums3.forEach(m => {
        nums4.forEach(n => {
            record[m + n] = (record[m + n] || 0) + 1;
        })
    })

    nums1.forEach(m => {
        nums2.forEach(n => {
            if(record[-m-n]) {
                answer += record[-m-n];
            }
        })
    })

    return answer;
};
// @lc code=end

