 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}
/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
    /* 
        cur, cur.next, cur.next.next cur.next.next.next
    */
   let dummyHead = new ListNode(NaN, head)
   let cur = dummyHead

    while(cur.next && cur.next.next) {
        const node1 = cur.next
        const node2 = node1.next
        const next = node2.next

        cur.next = node2
        node2.next = node1
        node1.next = next

        cur = node1
    }

    const answer = dummyHead.next
    dummyHead = null

   return answer
};
// @lc code=end

export {}