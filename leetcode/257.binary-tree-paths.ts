/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
    if(!root) return [];
    /*
        1 -> 1.left, 1 -> 1.right

        1.left ->
    */

    if(!root.left && !root.right) return [root.val + '']

    const result: string[] = []

    const leftResult = binaryTreePaths(root.left)
    const rightResult = binaryTreePaths(root.right)

    leftResult.forEach(item => {
        result.push(`${root.val}->${item}`)
    })

    rightResult.forEach(item => {
        result.push(`${root.val}->${item}`)
    })

    return result
};
// @lc code=end

