/*
 * @lc app=leetcode id=451 lang=typescript
 *
 * [451] Sort Characters By Frequency
 */

// @lc code=start
function frequencySort(s: string): string {
    // create a hashtable, key: char, value: frequency
    // sort by value

    // 1.create hashtable by frequency => {e: 2, t: 1, r: 1}
    // 2.values sorted => [2,1], 
    // 3.key and value changed => {2: [e], 1: [t, r]}
    // 4.combine results of 2 and 3
    interface ICharFre {
        [key: string]: number
    }

    interface IFreChar {
        [key: number]: string[]
    }
    
    /** Implement  **/

    // 1.create hashtable by frequency => {e: 2, t: 1, r: 1}
    const createObj = () : ICharFre => {
        const charFreObj:ICharFre = {};
        for(let c of s) {
            charFreObj[c] = (charFreObj[c] || 0) + 1;
        }
        return charFreObj;
    }

    // 2.values sorted => [2,1]
    const sortByFrequence = (charFreObj:ICharFre) : number[] => {
        const values = Object.values(charFreObj)
        return values.sort((a, b) => b - a)
    }

    // 3.key and value changed => {2: [e], 1: [t, r]}
    const swapKeyValue = (charFreObj:ICharFre) : IFreChar => {
        const results: IFreChar = {}
        Object.keys(charFreObj).forEach(char => {
            const fre = charFreObj[char];
            if(!results[fre]) {
                results[fre] = [];
            }
            results[fre].push(char);
        })

        return results;
    }

    // 4. combine the results.
    const getFinalResult = (sortedValues: number[], freCharObj: IFreChar) : string => {
        let result = '';

        const sortedSets = new Set(sortedValues);

        for(let fre of sortedSets.values()) {
            freCharObj[fre].forEach(char => {
                result += char.repeat(fre)
            })
        }
        return result;
    }

    const charFreObj = createObj();
    const sortedValues = sortByFrequence(charFreObj);
    const freCharObj = swapKeyValue(charFreObj);
    return getFinalResult(sortedValues, freCharObj);
};
// @lc code=end

