function sum(a) {
    return function (b) {
        return typeof b !== 'undefined' ? sum(a + b) : a
    }
}

console.log(sum(1)(2)(3)(4)())
