/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
    // English letters, digits, period '.', slash '/' or '_'.
    // result = []
    /* 
        itemStack
            push:
            pop: /, do actions in result
        action: {
            '.': nothing
            '..' pop
            'xxx' push
        }    
    */
   const resultStack = []
   let itemStr = ''

   function handleStack(str) {
        if(str === '..') {
            resultStack.pop()
        } else if (str && str !== '.') {
            resultStack.push(str)
        }
   }
   
   for(let s of path) {
       if(s === '/') {
            handleStack(itemStr)
            itemStr = ''
       } else {
            itemStr += s;
       }
   }

   handleStack(itemStr)

   return '/' + resultStack.join('/')
};
// @lc code=end

