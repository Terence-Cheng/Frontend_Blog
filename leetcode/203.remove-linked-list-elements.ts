class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    /*  
        pointer: cur 
        idea: cur.next === val, then jump cur.next

        while(cur.next)
            if val === cur.val
                jump
            else
                cur = cur.next
                   
    */
    let dummyHead = new ListNode(NaN, head)
    let cur = dummyHead

    while(cur.next) {
        if(cur.next.val === val) {
            let deleteNode = cur.next
            cur.next = deleteNode.next
            deleteNode = null;
        } else {
            cur = cur.next
        }
    }

    const retList = dummyHead.next
    dummyHead = null
    return retList;
};
// @lc code=end

export {}
