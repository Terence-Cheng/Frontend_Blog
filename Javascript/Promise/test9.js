const Promise = require('./Promise-9')

/* 
Implementations are encouraged, but not required, to detect such recursion and reject promise with an informative TypeError as the reason. [3.6]
*/

{
    const p1 = new Promise((resolve, reject) => {
        console.log('resolve is called')
        resolve(1)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        const p11 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('p1 then return promise', value + 3)
                resolve(p11)
            }, 2000)
        });

        return p11;
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
            console.log('22222, resolve is called')
            resolve(1)
        }, 3000)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        const p11 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('p1 then return promise', value + 3)
                resolve(p2)
            }, 2000)
        });
        return p11;
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