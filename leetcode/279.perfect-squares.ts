/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start
function numSquares(n: number): number {
    /*
        Shortest path in Graph
    */
    const queue: [number, number][] = []

    queue.push([n, 0])

    interface IVisitedRecords {
        [prop: number]: boolean
    }

    const visitedRecords: IVisitedRecords = {}

    while(queue.length) {
        const [val, level] = queue.shift()

        for(let i = 1; ; i++) {
            const graphVal = val - i ** 2;

            if (graphVal > 0 && !visitedRecords[graphVal]) {
                queue.push([graphVal, level  + 1])
                visitedRecords[graphVal] = true
            } else if(graphVal === 0) {
                return level + 1
            } else if(graphVal < 0) {
                break;
            }
        }
    }
};
// @lc code=end

