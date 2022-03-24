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
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function postorderTraversal(root: TreeNode | null): number[] {
    const answer: number[] = []
    const nodeStack: Array<number | TreeNode> = []

    const pushStack = (root: TreeNode | null) : void => {
        if(!root) return;
        nodeStack.push(root.val)
        nodeStack.push(root.right)
        nodeStack.push(root.left)
    }

    pushStack(root)
    
    while(nodeStack.length) {
        const node = nodeStack.pop();
        if(typeof node === 'number') {
            answer.push(node)
        } else {
            pushStack(node)
        }
    }

    return answer
};
// @lc code=end

