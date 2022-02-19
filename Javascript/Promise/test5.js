const Promise = require('./Promise-5')

/* 
2.3.1 If promise and x refer to the same object, reject promise with a TypeError as the reason.
*/

{
    const p1 = new Promise((resolve, reject) => {
        console.log('resolve is called')
        resolve(1)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return p2;
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
            console.log('resolve is called')
            resolve(1)
        }, 1000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return p2;
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
