 interface NestedInteger {
    constructor: (value?: number) => void;

    isInteger: () => boolean;

    getInteger: () => number | null;

    getList: () => NestedInteger[];
}
/*
 * @lc app=leetcode id=341 lang=typescript
 *
 * [341] Flatten Nested List Iterator
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedIterator {
    flattenedArr: number[]
    index: number
    constructor(nestedList: NestedInteger[]) {
        // [[1,1],2,[1,1]]
        /* 
        [
            {"_integer":null,"_list":[
                {"_integer":1,"_list":[]},{"_integer":1,"_list":[]}]
            },{"_integer":2,"_list":[]},{"_integer":null,"_list":[{"_integer":1,"_list":[]},{"_integer":1,"_list":[]}]}]
		
        */
        //    console.log(JSON.stringify(nestedList))
        // console.log(nestedList[0].isInteger(), nestedList[0].getList())
        // console.log(nestedList[1].isInteger(), nestedList[1].getInteger())

        this.flattenedArr = []
        this.index = 0
        this.flatten(nestedList)
        // console.log(this.flattenedArr);

    }

    flatten(nestedList: NestedInteger[]) {
        for(const nest of nestedList) {
            if(nest.isInteger()) {
                this.flattenedArr.push(nest.getInteger())
            } else {
                this.flatten(nest.getList())
            }
        }
    }

    hasNext(): boolean {
		return this.index < this.flattenedArr.length
    }

	next(): number {
		return this.flattenedArr[this.index++]
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
// @lc code=end

