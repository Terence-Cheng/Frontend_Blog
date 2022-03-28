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
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
    /* 
        Remember last level in loop.
        if currentLevel !== lastLevel {
            queue.unshift([])
            lastLevel = currentLevel
        }

        queue[0]....
    */
   const result: number[][] = []

   if(!root) return result;

   const queue: [TreeNode, number][] = []

   queue.push([root, 0])
   let lastLevel = -1

   while(queue.length) {
        const [node, level] = queue.shift()
        if(level !== lastLevel) {
            result.unshift([])
            lastLevel = level
        }
        result[0].push(node.val)

        if(node.left) {
            queue.push([node.left, level + 1])
        }

        if(node.right) {
            queue.push([node.right, level + 1])
        }
   }

   return result
};
// @lc code=end

