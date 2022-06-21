/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
    let inOrderCount: number = 0;
    let result: number = NaN
    const inOrder = (node: TreeNode | null) => {
        if(!node || !Number.isNaN(result)) return;
        inOrder(node.left);
        inOrderCount++;
        if(inOrderCount === k) {
            result = node.val;
            return;
        }
        inOrder(node.right);
    }
    inOrder(root);

    return result;
};
// @lc code=end

