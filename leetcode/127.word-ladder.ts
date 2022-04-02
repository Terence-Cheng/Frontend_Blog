/*
 * @lc app=leetcode id=127 lang=typescript
 *
 * [127] Word Ladder
 */

// @lc code=start
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    /*
        The shortest path in Graph

        Queue, when to push, when to shift
    */

   function meetCriteria(word: string, base: string): boolean {
       if(word === base) return false;

       let errorNums = 0

       for(let i = 0; i < word.length; i++) {
           if(word[i] !== base[i]) {
               errorNums++
               if(errorNums > 1) {
                   return false
               }
           }
       }

       return errorNums === 1
   }

   const queue: [string, number][] = []

   queue.push([beginWord, 1])

   const queueVisited = {[beginWord]: 1}

   while(queue.length) {
       const [begin, level] = queue.shift()

       for(const word of wordList) {
           if(meetCriteria(word, begin) && !queueVisited[word]) {
               if(word === endWord) {
                   return level + 1
               }
               queue.push([word, level + 1])
               queueVisited[word] = 1
           }
       }
   }

   return 0;

};
// @lc code=end

