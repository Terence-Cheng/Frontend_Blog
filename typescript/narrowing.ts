//js: typeof instanceof in
//ts: is

// -------------- typeof-----------
function getType(val: string | number) {
    if(typeof val === 'string') {
        val // string type
    } else {
        val // number type
    }
}

function getType0(val: number | number[] | null) {
    if(typeof val === 'object') {
        val //  number[] | null
    } else {
        val // number type
    }
}

// -------------- instanceof -----------
class Demo1 {

}

class Demo2 {

}

function getType2(val: Demo1 | Demo2) {
    if(val instanceof Demo1) {
        val // Demo1 type
    } else {
        val // Demo2 type
    }
}

// -------------- in -----------
const obj1 = {
    name: 'how',
    id: 33
}

const obj2 = {
    name: 'obj1',
    title: 'xxx'
}

type Obj1 = typeof obj1
type Obj2 = typeof obj2

function getType3(val: Obj1 | Obj2) {
    if('id' in val) {
        val // Obj1
    } else {
        val // Obj2
    }
}
  

// -------------- ts: is-----------
function isObj1Type(val: Obj1 | Obj2): val is Obj1 {
    return 'id' in val
}

function getType4(val: Obj1 | Obj2) {
    if(isObj1Type(val)) {
        val // Obj1 type
    } else {
        val // Obj2 type
    }
}

export {};