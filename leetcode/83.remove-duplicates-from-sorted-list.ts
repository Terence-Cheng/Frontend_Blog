/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    /* 
        Traverse the linked list.
            Store the current value.  // cur
            Find the next different value. // next
            Change the Next Pointer
    */

    type ListNodeOrNull = ListNode | null;

    const dummy = new ListNode(NaN, head);
     
    let cur: ListNodeOrNull = dummy;

    let then = cur.next;

    while(then) {
        if(cur.val !== then.val) {
            cur.next = then;
            cur = then;
        }
        then = then.next;
    }

    cur.next = null

    return dummy.next;
};
// @lc code=end

