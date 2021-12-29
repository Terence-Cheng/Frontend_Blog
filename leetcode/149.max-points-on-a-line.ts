/*
 * @lc app=leetcode id=149 lang=typescript
 *
 * [149] Max Points on a Line
 */

// @lc code=start
function maxPoints(points: number[][]): number {
    /* 
    
    Get all the straight lines.

    lineRecord = {
        [lindId]: count
    }

    1. Get the straight lines from points[i] to the other points.
    2. Put the lineId to the lineRecord, then count++.
    3. Update the answer.
    4. Get the points[j]..., repeat step1 from step3  
    */

    type Point = [number, number]

    function gcd(a: number, b: number): number {
        return b === 0 ? a : gcd(b, a % b)
    }

    function getStraightLineParams(point1: Point, point2: Point): string {
        const deltaX = point2[0] - point1[0]
        const deltaY = point2[1] - point1[1]

        if(deltaX === 0) {
            return `x=${point1[0]}`
        } else if (deltaY === 0) {
            return `y=${point1[1]}`
        }

        const gcdXY = gcd(deltaX, deltaY);

        let mx = deltaX / gcdXY;
        let my = deltaY / gcdXY;
        
        if(my < 0) {
            my = -my;
            mx = -mx;
        }

        return `${mx}_${my}`
    }

    interface LineRecord {
        [prop: string]: number
    }

    let answer = 1;

    for(let i = 0; i < points.length - 1; i++) {
        const lineRecord: LineRecord = {}
        for(let j = i + 1; j < points.length; j++) {
            const lineId = getStraightLineParams(points[i] as Point, points[j] as Point);
            if(!lineRecord[lineId]) {
                lineRecord[lineId] = 1;
            }
            lineRecord[lineId]++;

            answer = Math.max(answer, lineRecord[lineId]);
        }
    }


    return answer;
};
// @lc code=end