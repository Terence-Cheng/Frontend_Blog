class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    /* 
        1. Get total length
        2. k = k % length
        3. two pointers get the kth node from end
        4. put it to the head

        Notice: K is zero
    */

    if(!k) return head;  

    const dummyHead = new ListNode(NaN, head);
    let length = 0
    let p1 = dummyHead.next
    
    while(p1) {
        length++
        p1 = p1.next
    }

    k = k % length

    if(!k) {
        return head
    }

    let p2 = p1 = dummyHead

    for(let i = 0; i < k; i++) {
        p2 = p2.next
    }

    while(p2.next) {
        p1 = p1.next
        p2 = p2.next
    }

    const rightHead = p1.next

    p1.next = null

    const preFirstNode = dummyHead.next

    dummyHead.next = rightHead

    p2.next = preFirstNode

    return dummyHead.next

};
// @lc code=end