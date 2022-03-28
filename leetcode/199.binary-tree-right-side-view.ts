class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    /* 
        Get the last value at the level

        remember lastValue and lastLevel, 
            if lastLevel is not equal with currentLevel
            then lastValue is what we want

            update last value and lastLevel
            
    */
   const result: number[] = []

   if(!root) {
       return result
   }

   const queue: [TreeNode, number][] = []

   queue.push([root, 0])
   
   let lastValue: number = undefined;
   let lastLevel: number = 0;

   while(queue.length) {
       const [node, level] = queue.shift()

       if(level !== lastLevel) {
            lastLevel = level
            result.push(lastValue)
       }

       lastValue = node.val

       if(node.left) {
           queue.push([node.left, level + 1])
       }

       if(node.right) {
           queue.push([node.right, level + 1])
       }
   }

   result.push(lastValue)

   return result;
};
// @lc code=end

