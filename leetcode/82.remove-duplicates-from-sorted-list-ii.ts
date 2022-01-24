class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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
      pointers: cur
      for loop the List
        compare cur.next.val and cur.next.next.val
          if equal: for loop the restList until find the different val
          else: move cur to the next
    */

      const dummyHead = new ListNode(NaN, head)
      let cur = dummyHead;

      while (cur.next && cur.next.next) {
        if(cur.next.val === cur.next.next.val) {
          const value = cur.next.val
          while (cur.next && value === cur.next.val) {
            let temp = cur.next
            cur.next = cur.next.next
            temp = null
          }
        } else {
          cur = cur.next
        }
      }

      return dummyHead.next;
  
};
// @lc code=end
export {}
