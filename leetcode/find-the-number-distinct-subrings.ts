function findTheNumberDistinctSubstrings(s: string): number {
    const subStrSet = new Set<string>();
    const getSubstrByFixedLength = (length: number, str: string) => {
        if(str.length < length) return;
        let i = 0, j = length;

        while(j <= str.length) {
            subStrSet.add(str.slice(i, j));
            i++;
            j++;
        }

    }

    for(let i = 1; i <= s.length; i++) {
        getSubstrByFixedLength(i, s);
    }

    return subStrSet.size;
}


/*
 https://blog.csdn.net/qq_42985401/article/details/105351156
 https://blog.csdn.net/liugg2016/article/details/81874150?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7-81874150-blog-51324379.pc_relevant_multi_platform_whitelistv1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-7-81874150-blog-51324379.pc_relevant_multi_platform_whitelistv1&utm_relevant_index=13
 https://blog.csdn.net/liankewei123456/article/details/87296331?spm=1001.2101.3001.6650.11&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-11-87296331-blog-105351156.pc_relevant_multi_platform_whitelistv1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-11-87296331-blog-105351156.pc_relevant_multi_platform_whitelistv1&utm_relevant_index=14
*/
console.log(findTheNumberDistinctSubstrings('CCCCC') === 5);
console.log(findTheNumberDistinctSubstrings('ABABA') === 9);
console.log(findTheNumberDistinctSubstrings('abc') === 6);
console.log(findTheNumberDistinctSubstrings('abbabba') === 17);
console.log(findTheNumberDistinctSubstrings('dabddkababa') === 55);
console.log(findTheNumberDistinctSubstrings('bacaba') === 17);
console.log(findTheNumberDistinctSubstrings('baba') === 7);

