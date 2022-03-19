/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    /* 
        1. Get the length -> n. if n <= 2, return
        2. Get the mth from the end -> head2, m = Math.ceil(n / 2) - 1

        Or Just get the middle node in one loop.

        3. Reverse head2
        4. p1, p2
    */

    /* get the length */
    /* let p1 = head;
    let i = 0;
    while(p1) {
        i++;
        p1 = p1.next;
    }
    
    if(i < 3) return; */

    /* get the list from end */
    /* const m = Math.ceil(i / 2) - 1;

    let p2 = p1 = head;
    for(i = 0; i < m + 1; i++) {
        p2 = p2.next
    }
    while(p2) {
        p1 = p1.next;
        p2 = p2.next;
    } */

   /* 
    Get the middle node
    1,2,3   -> 2,4
    1,2,3,4 -> 3,5
    1,2,3,4,5 -> 3,6
    1,2,3,4,5,6 -> 4,7


    1,2,3 -> 1,1 2,3 p2.next
    1,2,3,4 -> 1,1 2,3 3,5 p2
    1,2,3,4,5 -> 1,1 2,3 3,5 p2.next
    1,2,3,4,5,6 -> 1,1 2,3 3,5 4,7 p2
   */

    let p1 = head, p2 = head

    while(p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next
    }

    const head2 = p1.next

    p1.next = null;

    /* reverse head2 */
    function reverseList(head: ListNode | null) : ListNode | null {
        const dummyHead = new ListNode(NaN, null);

        function innerReverse(head: ListNode | null) : ListNode | null {
            if(!head) return dummyHead;

            const originalNext = innerReverse(head.next)
            originalNext.next = head

            return head;
        }

        const reversedLastNode = innerReverse(head)

        reversedLastNode.next = null

        return dummyHead.next
    }

    p2 = reverseList(head2);

    /* insert head2 to head */
    p1 = head;

    while(p2) {
        const p1Next = p1.next;
        p1.next = p2;

        const p2Next = p2.next;
        p2.next = p1Next;

        p2 = p2Next

        p1 = p1.next.next
    }
    
};
// @lc code=end

