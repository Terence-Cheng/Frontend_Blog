/*
 * @lc app=leetcode id=113 lang=typescript
 *
 * [113] Path Sum II
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    if(!root) return [];

    if(!root.left && !root.right) {
        if(root.val === targetSum) {
            return [[root.val]]
        } else {
            return []
        }
    }

    const result: number[][] = []

    pathSum(root.left, targetSum - root.val).forEach(arr => {
        result.push([root.val, ...arr])
    })

    pathSum(root.right, targetSum - root.val).forEach(arr => {
        result.push([root.val, ...arr])
    })

    return result;
};
// @lc code=end

