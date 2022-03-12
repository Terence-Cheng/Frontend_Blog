class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
/* 
    1 Node, 1
    2 Node, 2
    2 Node, 1
*/

/* 
    pointer1, pointer2

    when pointer2 at the tail of list, then pointer1 is at the prev of  nth from end.

    1,2,3,4,5,null   2
    pointer2 -> null, pointer1 -> 3

*/

    const dummyHead = new ListNode(NaN, head)
    let pointer1 = dummyHead;
    let pointer2 = dummyHead;

    for(let i = 0; i <= n; i++) {
        pointer2 = pointer2.next
    }

    while(pointer2) {
        pointer2 = pointer2.next
        pointer1 = pointer1.next
    }

    pointer1.next = pointer1.next.next

    return dummyHead.next
};
// @lc code=end

