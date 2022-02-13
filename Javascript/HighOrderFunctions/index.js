/* 
High Order Functions:
A functions Accepts functions as parameters and/or Returns a function
*/


function sayHi(...args) {
    console.log('hi', ...args)
}

sayHi('Jerry')

// 1. Extension method, not modify the exist method.
/* 
    Call a function before call the sayHi

    const newSayHi = sayHi.before(callback)

    newSayHi('Tom')
*/
sayHi.before = function(cb) {
    return (...args) => {
        cb(...args)
        this(...args)
    }
}
const newSayHi = sayHi.before((...args) => {
    console.log('before say hi', ...args)
})

newSayHi('Tom');

// 2. Currying

function isType(val, type) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
}

console.log(isType('hello', 'String')) 
console.log(isType(123, 'Number'))
console.log(isType(123, 'number'))
console.log(isType(123, 'String'))

// It's easy to make a spelling mistake about `type`. So we can use Currying to fixed the parameter.
const isString = isType2('String')

console.log(isString('hi'))
console.log(isString(456))

function isType2(type) {
    return (val) => {
        return Object.prototype.toString.call(val) === `[object ${type}]`
    }
}