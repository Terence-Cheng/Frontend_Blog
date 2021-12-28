/*
 * @lc app=leetcode id=447 lang=typescript
 *
 * [447] Number of Boomerangs
 */

// @lc code=start
function numberOfBoomerangs(points: number[][]): number {
    /* 
    Input: points = [[0,0],[1,0],[2,0]]

    Set a finding Map

    const distanceRecord = { 
        [distance]: count  
        1: 2,
        4: 3,
        2: 1
    }  

    1.Get the distance from other points to the points[i].
    2.Update the distanceRecord, `key` is distance, `value` is the count.
        distanceRecord = { 
            1: 2,
            4: 3,
            2: 1
        } 
    3.For loop the distanceRecord, answer += value * (value - 1)
    4.Repeat the above 3 steps, to get the points[j], points[k]....
    */

    type Point = [number, number]

    function getDistance(x: Point, y: Point): number {
        return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2)
    }

    type DistanceRecord = {
        [prop: number]: number
    }

    let answer = 0;

    for(let i  = 0; i < points.length; i++) {
        const distanceRecord: DistanceRecord = {}
        for(let j = 0; j < points.length; j++) {
            if(i === j) continue;
            // 1.Get the distance from other points to the points[i].
            const distance = getDistance(points[i] as Point, points[j] as Point);
            // 2.Update the distanceRecord, `key` is distance, `value` is the count.
            if(!distanceRecord[distance]) distanceRecord[distance] = 0;
            distanceRecord[distance]++;
        }

        // 3.For loop the distanceRecord, answer += value * (value - 1)
        Object.keys(distanceRecord).forEach(distance => {
            answer += distanceRecord[distance] * (distanceRecord[distance] - 1)
        })
    }


    return answer;
};
// @lc code=end

