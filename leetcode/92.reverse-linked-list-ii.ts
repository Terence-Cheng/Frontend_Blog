/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
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

//  class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
// }

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {

    /* 
    
    for the list, when index >= left, and index <= right, reverse
    
    when for loop ends, the last point to the left - 1; the first point to the right + 1
    
    */

    // if(left === right) return head;

    type ListNodeAndNull = ListNode | null

    
    const dummy: ListNodeAndNull = new ListNode(0, head);

    let cur: ListNodeAndNull = dummy

    // get the left 0 1 2 3,left = 3, i = 3时
    for(let i = 1; i < left; i++) {
        cur = cur.next
    }

    const leftPre: ListNodeAndNull = cur

    let pre: ListNodeAndNull = null
    cur = cur.next
    const startNode = cur

    // reverse
    for(let i = left; i <= right; i++) {
        const next = cur.next

        cur.next = pre
        pre = cur
        cur = next
    }

    // 
    leftPre.next = pre;
    startNode.next = cur;
   
    return dummy.next;

    /* 
    
    [3,5] \n 1 \n 2
    
    */

};
// @lc code=end

