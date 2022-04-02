/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
    if(!root) return 0

    /*
        left === null && right === null
            1
        left === null && right
            minDepth(right) + 1
        left && right === null
            minDepth(left) + 1
        left && right
            minDepth(left), minDepth(right) + 1
    */

    if(!root.left && !root.right) {
        return 1
    }

    return Math.min( minDepth(root.left) || Infinity, minDepth(root.right) || Infinity ) + 1

};
// @lc code=end

