/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true;
    const getHeight = (node: TreeNode | null): number => {
        if(!node) return 0

        return Math.max( getHeight(node.left), getHeight(node.right) ) + 1
    }

    return Math.abs( getHeight(root.left) - getHeight(root.right) ) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end

