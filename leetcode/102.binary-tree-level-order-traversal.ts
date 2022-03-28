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
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {

    /* 
        A queue： [ [TreeNode, level] ]

        result: [][]

        For loop
            node, level = queue.pop

            result[level].push(node.val)

            queue.push(node.left, level + 1)
            queue.push(node.right, level + 1)
            
    */        

    const result: number[][] = []

    if(!root) return result;

    const queue: [TreeNode, number][] = []

    queue.push([root, 0])

    while(queue.length) {
        const [node, level] = queue.shift()

        if(!result[level]) result[level] = []

        result[level].push(node.val)

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

