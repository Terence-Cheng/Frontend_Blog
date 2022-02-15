const Promise = require('./Promise-2')

{
    /* 
    If onFulfilled is a function:
        it must be called after promise is fulfilled, with promise’s value as its first argument.
        it must not be called before promise is fulfilled.
        it must not be called more than once.
    */
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('resolve is called')
            resolve(1)
        }, 100)
    })

    p1.then(value => {
        console.log('onFulfilled success', value)
    }, error => {
        console.log('error onRejected', error)
    })
}

{
    /* 
    If onRejected is a function,
        it must be called after promise is rejected, with promise’s reason as its first argument.
        it must not be called before promise is rejected.
        it must not be called more than once.

    */
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('reject is called')
            reject(1)
        }, 100)
    })

    p1.then(value => {
        console.log('onFulfilled success', value)
    }, error => {
        console.log('error onRejected', error)
    })
}

{
    /* 
    
    2.2.6 then may be called multiple times on the same promise.
        If/when promise is fulfilled, all respective onFulfilled callbacks must execute in the order of their originating calls to then.
        If/when promise is rejected, all respective onRejected callbacks must execute in the order of their originating calls to then.
    */
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2.2.6 resolve is called')
            resolve(1)
        }, 100)
    })

    p1.then(value => {
        console.log('onFulfilled success 1', value)
    }, error => {
        console.log('error onRejected 1', error)
    })

    p1.then(value => {
        console.log('onFulfilled success 2', value)
    }, error => {
        console.log('error onRejected 2', error)
    })
}

{
    /* 
    
    2.2.6 then may be called multiple times on the same promise.
        If/when promise is rejected, all respective onRejected callbacks must execute in the order of their originating calls to then.
    */
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2.2.6 reject is called')
            reject(2)
        }, 100)
    })

    p1.then(value => {
        console.log('onFulfilled success 1', value)
    }, error => {
        console.log('error onRejected 1', error)
    })

    p1.then(value => {
        console.log('onFulfilled success 2', value)
    }, error => {
        console.log('error onRejected 2', error)
    })
}