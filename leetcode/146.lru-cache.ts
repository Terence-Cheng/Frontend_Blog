/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class LRUCache {
    readonly capacity: number;
    cache: Map<number, number>;
    cachedKeys: number[];
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cachedKeys = [];
        this.cache = new Map();
    }

    private addKey(key: number): void {
        this.cachedKeys.unshift(key);
    }

    get(key: number): number {
        if(this.cache.has(key)) {
            const index = this.cachedKeys.findIndex(ele => ele === key);
            this.cachedKeys.splice(index, 1);
            this.addKey(key);
            return this.cache.get(key)
        }
        return -1;
    }

    put(key: number, value: number): void {
        if(this.cache.has(key)) {
            this.get(key);
        } else {
            if(this.cachedKeys.length >= this.capacity) {
                const deletedKey = this.cachedKeys.pop();
                this.cache.delete(deletedKey);
                // this.addKey(key);
            }
            this.addKey(key);
        }
        this.cache.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end