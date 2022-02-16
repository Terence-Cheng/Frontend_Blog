const PEDDING = 'PEDDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

console.log('my promise')

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
                const x = onFulfilled(this.value)
                resolve(x)
            } else if (this.state === REJECTED) {
                const x = onRejected(this.reason)
                resolve(x)
            } else if (this.state === PEDDING) {
                this.onResolvedCallbacks.push((value) => {
                    const x = onFulfilled(value)
                    resolve(x)
                })
                this.onRejectedCallbacks.push(reason => {
                    const x = onRejected(reason)
                    resolve(x)
                })
            }
        })

        return p1
    }
}