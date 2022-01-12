 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}

/*
 * @lc app=leetcode id=328 lang=typescript
 *
 * [328] Odd Even Linked List
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

function oddEvenList(head: ListNode | null): ListNode | null {
    /* 
    
    Traverse the list, if indices === odd, then put it to the new list.

    concat the new list and old list

    --------------------------------------

    cur
    pre

    dummy2
    cur2

    while(cur)

        cur2.next = cur
        cur2 = cur

        pre.next = cur.next
        pre = pre.next

        if(pre) {
            cur = pre.next
        } else {
            break
        }  


    --------------------------------
    
    cur2.next = dummy.next

    return dummy2.next

    */
    



    const dummy = new ListNode(NaN, head);
    const dummy2 = new ListNode(NaN, null);

    let pre = dummy
    let cur = dummy.next

    let cur2 = dummy2

    while(cur) {
        cur2.next = cur
        cur2 = cur

        pre.next = cur.next
        pre = cur.next

        if(pre) {
            cur = pre.next
        } else {
            break
        }
    }

    cur2.next = dummy.next

    return dummy2.next;
};
// @lc code=end

