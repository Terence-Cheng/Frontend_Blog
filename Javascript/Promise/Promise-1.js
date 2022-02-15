const PEDDING = 'PEDDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

console.log('my promise')

module.exports = class Promise {
    constructor(executor) {
        this.state = PEDDING
        this.value = undefined
        this.reason = undefined

        const resolve = (value) => {
            if(this.state === PEDDING) {
                this.value = value
                this.state = FULFILLED
            }
        }

        const reject = (reason) => {
            if(this.state === PEDDING) {
                this.reason = reason
                this.state = REJECTED
            }
        }

        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e)
        }
    }
    then(onFulfilled, onRejected) {
        if(this.state === FULFILLED) {
            onFulfilled(this.value)
        } else if (this.state === REJECTED) {
            onRejected(this.reason)
        }
    }
}