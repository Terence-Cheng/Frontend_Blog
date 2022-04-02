/*
 * @lc app=leetcode id=126 lang=typescript
 *
 * [126] Word Ladder II
 */

// @lc code=start
function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    /*
        TODO: Not Accpeted
    */
    /*
        The shortest path in Graph

        Queue: push unshift

        result = []

        while

        if(level <= shortestLevel) {

        }
    */



   /*

   "red" \n "tax" \n ["ted","tex","red","tax","tad","den","rex","pee"]
   */
   const queue: [INode, number][] = []
   const result: string[][] = []

   interface INode {
       val: string,
       parent: INode | null
   }

   const graphs: INode = {
       val: beginWord,
       parent: null
   }

   queue.push([graphs, 1])

   let shortestLevel = Infinity

   const visitedWords = {}

//    visitedWords[1][beginWord] = 1;

   while(queue.length) {
       const [lastNode, level] = queue.shift()

       const {val: lastWord} = lastNode

       const currentLevel = level + 1

       for(const word of wordList) {
           if(!visitedWords[word] && isOneLetterDiffirent(word, lastWord)) {
               if(word === endWord) {
                   if(currentLevel <= shortestLevel) {
                       shortestLevel = currentLevel
                       result.push([...getPath(lastNode), word])
                   } else {
                       break
                   }
               } else {
                   queue.push([{val: word, parent: lastNode}, currentLevel])
                   visitedWords[word] = 1;
               }
           }
       }
   }

   function isOneLetterDiffirent(word: string, base: string): boolean {
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

    function getPath(node: INode): string[] {
        const paths: string[] = []

        while(node) {
            paths.unshift(node.val)
            node = node.parent
        }

        return paths;
    }

   return result;

};
// @lc code=end

