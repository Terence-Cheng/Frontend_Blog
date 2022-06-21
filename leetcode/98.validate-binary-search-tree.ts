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
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
    /*
        Check every node in the tree, Sets the boundary, and the nodes should be in the boundary.
    */
   const dfs = (node: TreeNode | null, mininum: number, maxinum: number): boolean => {
       if(!node) return true

       if(node.val <= mininum || node.val >= maxinum) {
           return false
       }
       return dfs(node.left, mininum, node.val) && dfs(node.right, node.val, maxinum)
   }

   return dfs(root, -Infinity, Infinity)
};
// @lc code=end

