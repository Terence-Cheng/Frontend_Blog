
class Cat {
    constructor(name: string, age: number) {

    }
}

class Dog {
    constructor(name: string, age: number) {

    }
}

// Sometimes you want to accept some class constructor function that produces an instance of a class which derives from some abstract class.
// typeof can acheive that
function createAnimal(clazz: typeof Cat, name: string, age: number) {
    return new clazz(name, age);
}

const r1 = createAnimal(Cat, 'Tom', 12);
const r2 = createAnimal(Dog, 'Tom', 12);

function createAnimal2<T>(clazz: {new (name: string, age : number): T}, name: string, age: number) : T {
    return new clazz(name, age);
}

const r21 = createAnimal2<Cat>(Cat, 'Tom', 12);
const r22 = createAnimal2(Dog, 'Tom', 12);

// ------------------------------------------------------------
function createArray<T>(times: number, val: T): T[] {
    return new Array(times).fill(val)
}

const r31 = createArray(3, 1);
const r32 = createArray(3, '1');

interface ICreateArray {
    <T>(times: number, val: T): T[]
} 

const createArray2: ICreateArray = (times, val) => {
    return new Array(times).fill(val)
}

const r41 = createArray2(3, 1);
const r42 = createArray2(3, '1');


/* ---------------------3 Implement forEach---------------------------- */
interface ICallback<T> {
    (item: T, index: number): void
}
interface IForeach {
    <T>(arr: T[], callback: ICallback<T>): void
}

const forEach: IForeach = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i)
    }
}

forEach([2,6,1], (item) => console.log(item));
forEach(['2','6','1'], (item) => console.log(item));

/* ------------------4 Generic Contraints------------------------- */

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

// keyof 
type myany = keyof any;

const x = {a:1, b:2, c:3, d:4}

getProperty(x, 'a');
getProperty(x, 'e'); // error

export {};