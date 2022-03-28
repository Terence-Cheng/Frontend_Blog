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
 * @lc app=leetcode id=103 lang=typescript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []

    if(!root) return result;

    const queue: [TreeNode, number][] = []

    let lastLevel = -1
    let fromRight: boolean = true
    queue.push([root, 0])


    while(queue.length) {
        const [node, level] = queue.shift()
        if(level !== lastLevel) {
            lastLevel = level
            result[level] = []
            fromRight = !fromRight
        }

        if(fromRight) {
            result[level].unshift(node.val)
        } else {
            result[level].push(node.val)
        }

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

