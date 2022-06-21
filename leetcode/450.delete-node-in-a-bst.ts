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
 * @lc app=leetcode id=450 lang=typescript
 *
 * [450] Delete Node in a BST
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    /*
        InOrder
        Successor
        Predecessor
    */
    /*
        Leaf -> Delete
        Not Leaf ->
            Right Child -> Find Successor, replace the current node with Successor, then recur delete Successor
            Left Child -> Find Precessor, then recur delete
        Not Find -> return
    */
   if(root === null) {
       return null
   }
   if(root.val < key) {
       root.right = deleteNode(root.right, key)
   } else if (root.val > key) {
       root.left = deleteNode(root.left, key)
   } else {
       if(!root.left && !root.right) {
           root = null
       } else if(root.right) {
           root.val = successor(root)
           root.right = deleteNode(root.right, root.val)
       } else {
           root.val = predecessor(root)
           root.left = deleteNode(root.left, root.val)
       }
   }
   return root
};
function successor(root: TreeNode): number {
    root = root.right
    while(root.left) {
        root = root.left
    }
    return root.val
}

function predecessor(root: TreeNode): number {
    root = root.left
    while(root.right) {
        root = root.right
    }
    return root.val
}
// @lc code=end
