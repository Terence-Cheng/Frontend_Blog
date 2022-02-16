const PEDDING = 'PEDDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

console.log('my promise')

/* 

*/

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
                try {
                    const x = onFulfilled(this.value)
                    resolve(x)
                } catch(e) {
                    reject(e)
                }

            } else if (this.state === REJECTED) {
                try {
                    const x = onRejected(this.reason)
                    resolve(x)
                } catch(e) {
                    reject(e)
                }

            } else if (this.state === PEDDING) {
                this.onResolvedCallbacks.push((value) => {
                    try {
                        const x = onFulfilled(value)
                        resolve(x)
                    } catch(e) {
                        reject(e)
                    }

                })
                this.onRejectedCallbacks.push(reason => {
                    try {
                        const x = onRejected(reason)
                        resolve(x)
                    } catch(e) {
                        reject(e)
                    }
                })
            }
        })

        return p1
    }
}