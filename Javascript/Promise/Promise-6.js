const PEDDING = 'PEDDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

console.log('my promise')

/* 

*/

function resolvePromise(promise, x, resolve, reject) {
    if(promise === x) {
        throw new TypeError('Chaining cycle detected for promise #<Promise>')
    }
}

module.exports = class Promise {
    constructor(executor) {
        this.state = PEDDING
        this.value = undefined
        this.reason = undefined

        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (value) => {
            if(this.state === PEDDING) {
                this.value = value
                this.state = FULFILLED
                this.onResolvedCallbacks.forEach(cb => cb(this.value))
            }
        }

        const reject = (reason) => {
            if(this.state === PEDDING) {
                this.reason = reason
                this.state = REJECTED
                this.onRejectedCallbacks.forEach(cb => cb(this.reason))
            }
        }

        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        const p1 = new Promise((resolve, reject) => {
            if(this.state === FULFILLED) {
                // Why setTimeout ? In `resolvePromise(p1, x, resolve, reject)`, we use p1.
                // Otherwise, we will get an error `Cannot access xxx before initialization`.
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value)
                        resolvePromise(p1, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(p1, x, resolve, reject)
                    } catch(e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.state === PEDDING) {
                this.onResolvedCallbacks.push((value) => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(value)
                            resolvePromise(p1, x, resolve, reject)
                        } catch(e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(reason => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(reason)
                            resolvePromise(p1, x, resolve, reject)
                        } catch(e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return p1
    }
}