// const Promise = require('./Promise-7')

/* 
If a promise is resolved with a thenable that participates in a circular thenable chain, 
such that the recursive nature of [[Resolve]](promise, thenable) eventually causes [[Resolve]](promise, thenable) to be called again, 
following the above algorithm will lead to infinite recursion. 
Implementations are encouraged, but not required, to detect such recursion and reject promise with an informative TypeError as the reason. [3.6]
*/

{
    const p1 = new Promise((resolve, reject) => {
        console.log('resolve is called')
        resolve(1)
    })

    const p2 = p1.then(value => {
        console.log('onFulfilled success', value)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('p1 then return promise', value + 3)
                resolve(new Promise(resolve => {
                    setTimeout(() => {
                        resolve(value + 3)
                    }, 2000)        
                }))
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