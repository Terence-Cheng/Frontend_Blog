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

        1 -> 2 -> 3 -> 4

        4 -> 3 -> 2 -> 1

    */

     /* 
        [1, 2] 2 => No rest list
        [1,2,3,4,5] 2 => There is one node in the rest list
        [1,2,3,4,5] 3 => There is more than one nodes in rest list, and need to keep pointers in the rest list.  
     */   
    let dummyHead = new ListNode(NaN, head)    

    const reverse: (a:number, b: ListNode | null) => {nextNode: ListNode, restHead: ListNode, newHead: ListNode, isCompleteList: boolean} = (count, cur) => {
        if(count >= k || !cur) {
            return {
                nextNode: cur,
                newHead: cur,
                isCompleteList: count >= k && !!cur,
                restHead: cur && cur.next,
            }
        }

        const {nextNode, restHead, newHead, isCompleteList } = reverse(count + 1, cur.next)

        if(isCompleteList) nextNode.next = cur;

        return {
            nextNode: cur,
            restHead,
            newHead,
            isCompleteList
        }
    }

    let lastHead = dummyHead
    while(true) {
        const {restHead, nextNode, newHead, isCompleteList } = reverse(1, lastHead.next)

        if(!restHead) {
            if(isCompleteList) {
                lastHead.next = newHead
                nextNode.next = null
            }
            break;
        }

        lastHead.next = newHead
        nextNode.next = restHead

        lastHead = nextNode
    }

    return dummyHead.next

};
// @lc code=end

export {}
