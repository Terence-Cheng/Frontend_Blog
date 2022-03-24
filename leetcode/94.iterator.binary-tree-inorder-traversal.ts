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
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

 function inorderTraversal(root: TreeNode | null): number[] {
    const answer: number[] = []
    const stack: Array<number | TreeNode> = []

    function pushToStack(node: TreeNode | null): void {
        if(!node) return;
        stack.push(node.right)
        stack.push(node.val)
        stack.push(node.left)
    }

    pushToStack(root)

    while(stack.length) {
        const node = stack.pop()

        if(typeof node === 'number') {
            answer.push(node)
        } else {
            pushToStack(node)
        }
    }

    return answer
};
// @lc code=end

