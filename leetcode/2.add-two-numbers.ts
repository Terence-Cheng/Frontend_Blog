class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    /* 
        cur1
        cur2
        l3 = cur3

        lastExtraDigit = 0

        while (cur1 || cur2) 
            cur3.next.val = getOnesDigit(cur1.val + cur2.val + lastExtraDigit)
            cur3 = cur3.next
            
            lastExtraDigit = getTensDigit(cur1.val + cur2.val + lastExtraDigit)
            
            cur1 = cur1.next
            cur2 = cur2.next


        return l3.next
    */

    let cur1 = l1, cur2 = l2;

    const l3 = new ListNode(NaN, null);
    let cur3 = l3;

    let lastExtraDigit = 0;

    while(cur1 || cur2) {

        const plusedVal = (cur1 && cur1.val || 0) + (cur2 && cur2.val || 0) + lastExtraDigit;
        const [tensDigit, onesDigit] = getDigits(plusedVal);

        cur3.next = new ListNode(onesDigit, null);
        cur3 = cur3.next

        lastExtraDigit = tensDigit;

        cur1 = cur1 && cur1.next
        cur2 = cur2 && cur2.next
    }

    if(lastExtraDigit) {
        cur3.next = new ListNode(lastExtraDigit, null);
    }

    function getDigits(val: number): number[] {
        const strArr = (val + '').split('')
        if(strArr.length === 1) {
            strArr.unshift('0')
        }
        return [+strArr[0], +strArr[1]]
    }

    return l3.next;
};
// @lc code=end

export {}
