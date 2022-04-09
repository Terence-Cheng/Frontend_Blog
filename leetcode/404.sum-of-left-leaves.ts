/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if(!root) return 0;

    type Direction = 'left' | 'right' | ''

    const compute = (node: TreeNode | null, direction: Direction): number => {
        if(!node) return 0;

        if(!node.left && !node.right) {
            if(direction === 'left') {
                return node.val
            } else {
                return 0
            }
        }

        return compute(node.left, 'left') + compute(node.right, 'right')
    }

    return compute(root, '');
};
// @lc code=end

