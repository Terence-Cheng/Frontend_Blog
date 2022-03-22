/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
    /* 
        numberStatck = []

        for loop the tokens
            if token === * / + -
                numberStack.pop pop
                push
            else
                push    
    */
   type Operation = (a: number, b: number) => number
   interface TokenUtils {
        '+': Operation,
        '-': Operation,
        '*': Operation,
        '/': Operation
   }
   const tokenUtils: TokenUtils = {
       '+': (a, b) => b + a,
       '-': (a, b) => b - a,
       '*': (a, b) => b * a,
       '/': (a, b) => {
            const c = b / a
            return c >= 0 ? Math.floor(c) : Math.ceil(c)
        }
   }
   const numStack: number[] = []

   for(const t of tokens) {
       if(Object.keys(tokenUtils).includes(t)) {
            numStack.push(tokenUtils[t](numStack.pop(), numStack.pop()))
       } else {
           numStack.push(Number(t))
       }
   }

   return numStack[0]
};
// @lc code=end

