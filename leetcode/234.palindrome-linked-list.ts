class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
// *
//  * Definition for singly-linked list.



function isPalindrome(head: ListNode | null): boolean {
    /* 
        list1, list2
        reverse list2
        compare list1 and list2
    */


   /* 
    1,2,3 -> 1,2 3  -> 1,1 2,3 terminate !p2.next
    1,2,3,4 -> 1,2 3,4 -> 1,1 2,3 terminate !p2.next.next
   */     

    /* 
    test case

    1
    1,1
    1,2,3
    1,2,3,4
    */

   /* split the list */ 
   let p1 = head, p2 = head;

   while(p2 && p2.next && p2.next.next) {
       p2 = p2.next.next
       p1 = p1.next
   }

   let head2 = p1.next

   p1.next = null

   /* reverse the list */
   function reverseList(innerHead: ListNode): ListNode | null {
        let pre = null, cur = innerHead;

        while(cur) {
            const next = cur.next;

            cur.next = pre
            pre = cur
            cur = next
        }

        return pre;

   }

   head2 = reverseList(head2)

   /* compare */
   p1 = head; p2 = head2;

   while(p2) {
       if(p2.val !== p1.val) {
           return false
       }
       p1 = p1.next
       p2 = p2.next
   }

   return true;

};
// @lc code=end

