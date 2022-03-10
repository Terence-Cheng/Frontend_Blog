/*
 * @lc app=leetcode id=237 lang=typescript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root: ListNode | null): void {
    const next = root.next

    root.val = next.val

    root.next = next.next
};
// @lc code=end

