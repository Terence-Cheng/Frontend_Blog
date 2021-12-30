/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    /* 
        nums = [1,2,3,1], k = 3

        Solution1: Finding

        Time complexity: O(n)    beats 63.72 %
        Memory complexity: O(n)  beats 64.6 %

        For loop
            If the value is new
                then put it into the records
            Else
                compare the index between them
                    if <= k
                        return true
                    else
                        update index

    */
   /*
    interface Records {
        [prop: number]: number
        //value : index
    }
    const records: Records = {}
    for(let i = 0; i < nums.length; i++) {
        if(records.hasOwnProperty(nums[i])) {
            if(i - records[nums[i]] < k + 1) return true;
        }
        records[nums[i]] = i
    }
    return false
    */

    /* 
        Solution2

        Sliding window + Set

        Convert this question to that 
            Can find a Sliding window that contains the duplicate nums?


        recordSet = new Set(), maxSize is k

        Sliding window: [i - k + 1, i]    


        For loop nums
            If the new value in the recordSet, return true

            Else Put the new value into the recordSet

            If recordSet is full, then Delete the start of the Sliding window.

        Time complexity: O(n)    beats 41.59 %
        Memory complexity: O(k)  beats 77.88 %    
    */

    const recordSet: Set<number> = new Set();

    for(let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];

        if(recordSet.has(currentValue)) {
            return true;
        }

        recordSet.add(currentValue)

        // make sure that the max size is k 
        if(recordSet.size > k) {
             // i = 3, k = 3, delete 0
             // 0 1 2 3 4 5
            recordSet.delete(nums[i - k]);
        }
    }

            
    return false;

};
// @lc code=end

