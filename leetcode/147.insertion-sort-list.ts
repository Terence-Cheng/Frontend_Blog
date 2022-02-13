class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*
 * @lc app=leetcode id=147 lang=typescript
 *
 * [147] Insertion Sort List
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

function insertionSortList(head: ListNode | null): ListNode | null {
    /* 
        create a new List, put every node of the old list to the new list
    */
   /* 
     []
     [1]
     [1,2]
     [4,2,1,3]
     [1,2,3,4]
   */

    let dummyHead = new ListNode(NaN, null)
    let cur = head
    while(cur) {
        // put cur to the new list
        //         0
        // 1,4,7   0
        // 1,4,7   2
        // 1,4,7   8
        let curInNewList = dummyHead

        let inserted = false
        while(curInNewList.next) {
            if(curInNewList.next.val >= cur.val) {
                const curNextInNewList = curInNewList.next
                curInNewList.next = cur
                cur = cur.next
                curInNewList.next.next = curNextInNewList
                inserted = true
                break;
            }
            curInNewList = curInNewList.next
        }

        if(!inserted) {
            curInNewList.next = cur
            cur = cur.next
            curInNewList.next.next = null
        }

    }

    return dummyHead.next;

};
// @lc code=end

