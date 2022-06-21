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
 * @lc app=leetcode id=437 lang=typescript
 *
 * [437] Path Sum III
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

function pathSum(root: TreeNode | null, targetSum: number): number {
    /*
        include current node
        Not include
    */

   if(!root) {
       return 0
   }
   let result: number = 0
   result +=
        findPath(root, targetSum)
        + pathSum(root.left, targetSum)
        + pathSum(root.right, targetSum)

   return result
};

function findPath(node: TreeNode | null, sum: number): number {
    // Inlude the currentNode
    if(!node) return 0;

    let result = 0
    if(node.val === sum) {
        result = 1
    }

    result += findPath(node.left, sum - node.val) + findPath(node.right, sum - node.val)
    return result
}
// @lc code=end

