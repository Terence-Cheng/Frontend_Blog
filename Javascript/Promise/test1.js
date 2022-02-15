const Promise = require('./Promise-1')
/*
A promise must be in one of three states: pending, fulfilled, or rejected.

When pending, a promise:
    may transition to either the fulfilled or rejected state.
When fulfilled, a promise:
    must not transition to any other state.
    must have a value, which must not change.
When rejected, a promise:
    must not transition to any other state.
    must have a reason, which must not change.
*/

/* Demo1
The then Method

Both onFulfilled and onRejected are optional arguments:
    If onFulfilled is not a function, it must be ignored.
    If onRejected is not a function, it must be ignored.
If onFulfilled is a function:
    it must be called after promise is fulfilled, with promise’s value as its first argument.
    it must not be called before promise is fulfilled.
    it must not be called more than once.
*/
{
    const p1 = new Promise((resolve, reject) => {
        resolve(1)
    })

    p1.then(value => {
        console.log('onFulfilled success', value)
    }, error => {
        console.log('error onRejected', error)
    })
}

{
    const p1 = new Promise((resolve, reject) => {
        reject(1)
    })

    p1.then(value => {
        console.log('onFulfilled success', value)
    }, error => {
        console.log('error onRejected', error)
    })
}

{
    const p1 = new Promise((resolve, reject) => {
        throw Error('throw an error')
    })

    p1.then(value => {
        console.log('onFulfilled success', value)
    }, error => {
        console.log('error onRejected', error)
    })
}

/* 
Demo2
*/