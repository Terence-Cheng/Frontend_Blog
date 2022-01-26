class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
const printList: (a: ListNode | null) => void = (head) => {
    const arr: number[] = []

    let cur = head

    let i = 0;
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
        i++;
        if(i>=9) {
            break;
        }
    }

    console.log(arr)
}

/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    /* 
        Recur:

        head -> 1 -> 2 -> 3 -> 4 -> rest

        head -> 4 -> 3 -> 2 -> 1 -> rest

        recur rest
    */

     /* 
        [1, 2] 2 => No rest list
        [1,2,3,4,5] 2 => There is one node in the rest list
        [1,2,3,4,5] 3 => There is more than one nodes in rest list, and need to keep pointers in the rest list.  
     */   

    let dummyHead = new ListNode(NaN, head)    

    const reverse: 
        (b: ListNode | null) => {restHead: ListNode, newHead: ListNode, isCompleteFragment: boolean}
        = (cur) => {

            let newHead = null;
            let restHead = null;
            let isCompleteFragment = false;

            const innerReverse:(a: number, b: ListNode | null) => ListNode | null = (count, cur) => {
                // terminate condition
                if(count >= k || !cur) {
                    newHead = cur;
                    isCompleteFragment = count >= k && !!cur;
                    restHead = cur && cur.next;
                    return cur;
                }

                // come
                const lastNode = innerReverse(count + 1, cur.next)

                // re
                if(isCompleteFragment) lastNode.next = cur;

                return cur;
            }

            innerReverse(1, cur)

            return {
                newHead,
                restHead,
                isCompleteFragment,
            }
    }

    let lastHead = dummyHead
    while(true) {
        const newLast = lastHead.next
        const {                
            newHead,
            restHead,
            isCompleteFragment, 
        } = reverse(lastHead.next)

        if(!restHead) {
            if(isCompleteFragment) {
                lastHead.next = newHead
                newLast.next = null
            }
            break;
        }

        lastHead.next = newHead
        newLast.next = restHead

        lastHead = newLast
    }

    return dummyHead.next

};
// @lc code=end

export {}
