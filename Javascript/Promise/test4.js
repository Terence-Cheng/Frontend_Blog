const Promise = require('./Promise-4')

/* 

2.2.7 then must return a promise [3.3].

 promise2 = promise1.then(onFulfilled, onRejected);

    If either onFulfilled or onRejected returns a value x, run the Promise Resolution Procedure [[Resolve]](promise2, x).
    If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason.
    If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
    If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.

*/

{
    // If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason..
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolve is called')
            resolve(1)
        }, 1000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        throw Error(value + 2)
    }, error => {
        console.log('error onRejected', error)
        return error
    })
    
    p2.then(value => {
        console.log('p2 onFulfilled success', value)
    }, error => {
        console.log('p2 error onRejected', error)
    })
}

{
    // If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason..
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('reject is called')
            reject(3)
        }, 1000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return value + 1
    }, error => {
        console.log('error onRejected', error)
        throw Error(error)
        // return error
    })
    
    p2.then(value => {
        console.log('p2 onFulfilled success', value)
    }, error => {
        console.log('p2 error onRejected', error)
    })
}