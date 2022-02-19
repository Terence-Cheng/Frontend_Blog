const Promise = require('./Promise-6')

/* 
2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
*/


{
    const p1 = new Promise((resolve, reject) => {
        console.log('2.3.3.3.1 If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).')
        console.log('resolve is called')
        resolve(1)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('p1 then return promise', value + 2)
                resolve(value + 2)
            }, 2000)
        });
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
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('---------------- 2.3.3.3.2 If/when rejectPromise is called with a reason r, reject promise with r.')
            console.log('resolve is called')
            resolve(1)
        }, 3000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(value - 2)
            }, 2000)
        });
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
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2.3.4 If x is not an object or function, fulfill promise with x.')
            console.log('resolve is called')
            resolve(1)
        }, 10000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return (value + 2)
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