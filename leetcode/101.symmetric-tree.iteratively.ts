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
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return true;

    const queue: [TreeNode | null, TreeNode | null][] = []

    queue.push([root.left, root.right])

    while(queue.length) {
        const [left, right] = queue.pop()

        if(left && right) {
            if(left.val !== right.val) return false

            queue.push([left.right, right.left])
            queue.push([left.left, right.right])
        } else if((!left && right) || (left && !right)) {
            return false
        }
    }

    return true
};
// @lc code=end

