class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * @lc app=leetcode id=86 lang=typescript
 *
 * [86] Partition List
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

function partition(head: ListNode | null, x: number): ListNode | null {
    /* 
    Traverse the LinkedList
        If val less than x, then move it to the new List

    Implement
        
        pre cur

        dummy2 = new ListNode(); cur2


        while cur
            if val < x
                cur2.next = cur
                cur2 = cur2.next


                cur = cur.next
                pre.next = cur

            else
                pre = cur
                cur = cur.next    

        cur2.next = dummy.next

    */

    type ListNodeOrNull = ListNode | null;    
    const dummy: ListNode = new ListNode(NaN, head);
    const dummy2: ListNode = new ListNode(NaN, null);
    
    let pre: ListNodeOrNull = dummy;
    let cur = pre.next;

    let cur2 = dummy2

    while(cur) {
        if(cur.val < x) {
            cur2.next = cur;
            cur2 = cur2.next;

            cur = cur.next;
            pre.next = cur;
        } else {
           pre = cur;
           cur = cur.next;
        }
    }

    cur2.next = dummy.next

    return dummy2.next;
};
// @lc code=end

