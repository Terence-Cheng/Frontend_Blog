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

    const compareTwoTrees = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
        if(!root1 && !root2) return true;

        if(root1 && root2) {
            if(root1.val === root2.val) {
                return compareTwoTrees(root1.left, root2.right) && compareTwoTrees(root1.right, root2.left)
            }
            return false
        }

        return false

    }

    return compareTwoTrees(root.left, root.right)
};
// @lc code=end

