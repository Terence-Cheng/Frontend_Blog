class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    /* 
        for loop the two list
            if Node.val in list2 < list1
                put Node in list2 to answerList
            else if
                ...    
        
        if(list2 not null)
            put the rest of list2 to the answerList   
        else if list1 not null 
            ...        
    */
    const dummyHead = new ListNode(NaN, null)
    let answerCur = dummyHead
    let cur1 = list1;
    let cur2 = list2

    while(cur1 && cur2) {
        if(cur2.val < cur1.val) {
            answerCur.next = cur2
            cur2 = cur2.next
        } else {
            answerCur.next = cur1
            cur1 = cur1.next
        }
        answerCur = answerCur.next
    }

    if(cur2) {
        answerCur.next = cur2
    } else if (cur1) {
        answerCur.next = cur1
    }

    return dummyHead.next
};
// @lc code=end

export {}