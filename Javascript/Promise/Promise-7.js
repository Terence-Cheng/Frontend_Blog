const PEDDING = 'PEDDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

console.log('my promise 6')

/* 
2.3.3 Otherwise, if x is an object or function,
    2.3.3.1 Let then be x.then. [3.5]
    2.3.3.2 If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
    2.3.3.3 If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise, where:
        2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
        2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.
        2.3.3.3.3 If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.
        2.3.3.3.4 If calling then throws an exception e,
            2.3.3.3.4.1 If resolvePromise or rejectPromise have been called, ignore it.
            2.3.3.3.4.2 Otherwise, reject promise with e as the reason.
    2.3.3.4 If then is not a function, fulfill promise with x.
2.3.4 If x is not an object or function, fulfill promise with x.
*/

function resolvePromise(promise, x, resolve, reject) {
    if(promise === x) {
        throw new TypeError('Chaining cycle detected for promise #<Promise>')
    }

    // 2.3.3 Otherwise, if x is an object or function
    if((typeof x === 'object' && x !== null) || typeof x === 'function') {
        let then;
        try {
            // 2.3.3.1 Let then be x.then. [3.5]
            then = x.then
        } catch (e) {
            // 2.3.3.2 If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.
            reject(e)
        }

        // 2.3.3.3 If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise, where:
        if(typeof then === 'function') {
            then.call(x, y => {
                // 2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
                resolve(y)
            }, r => {
                // 2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.
                reject(r)
            })
        } else {
            // 2.3.3.4 If then is not a function, fulfill promise with x.
            resolve(x)
        }
    } else {
        // 2.3.4 If x is not an object or function, fulfill promise with x.
        resolve(x)
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