/*
 * @lc app=leetcode id=129 lang=typescript
 *
 * [129] Sum Root to Leaf Numbers
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

function sumNumbers(root: TreeNode | null): number {
    const getNumbers = (node: TreeNode | null): string[] => {
        if(!node) return []

        if(!node.left && !node.right) {
            return [`${node.val}`]
        }

        const result: string[] = []

        getNumbers(node.left).forEach(str => result.push(`${node.val}${str}`))
        getNumbers(node.right).forEach(str => result.push(`${node.val}${str}`))

        return result
    }

    return getNumbers(root).reduce((acc, cur) => acc + Number(cur), 0)
};
// @lc code=end

