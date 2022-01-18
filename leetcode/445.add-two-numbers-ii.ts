class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=445 lang=typescript
 *
 * [445] Add Two Numbers II
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
    const nums1: number[] = []
    const nums2: number[] = []
    // const nums3: number[] = []

    while(l1) {
        nums1.push(l1.val)
        l1 = l1.next
    }

    while(l2) {
        nums2.push(l2.val)
        l2 = l2.next
    }

    let cur = new ListNode(NaN, null);

    let carry = 0;
    while(nums1.length || nums2.length) {
        const sum = (nums1[nums1.length - 1] || 0) + (nums2[nums2.length - 1] || 0) + carry
        cur.val = sum % 10

        cur = new ListNode(NaN, cur)
        // cur = prev

        carry = Math.floor(sum / 10)

        nums1.pop()
        nums2.pop()
    }

    if(carry) {
        cur.val = carry // note: the last carry
        cur = new ListNode(NaN, cur)
    }

    return cur.next
};
// @lc code=end

export {}
