/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    /* 
    1. Create a anagramMap = {}
    2. for loop the strs, convert every str into a array, then sort the array, and put the results of join() into anagramMap
    3. for in the anagramMap, get the answer.

    Time complexity: O(nmlog(m))
    Memory complexity: O(n)
    */
    interface AnagramMap {
        [prop: string]: string[]
    }

    const anagramMap: AnagramMap = {};

    strs.forEach(str => {
        const anagramStr = str.split('').sort().join('');
        if(!anagramMap[anagramStr]){
            anagramMap[anagramStr] = []
        }
        anagramMap[anagramStr].push(str);
    })

    return Object.keys(anagramMap).map(key => {
        return anagramMap[key]
    })
};
// @lc code=end

