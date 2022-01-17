{
    // primitives: string, number and boolean
    let str1 = 'hello' // string
    let num1 = 2 // number
    let bool = true // boolean
}

{
    // literal types
    const str1 = 'hello' // const str1:hello.  // hello is the literal type
}

{
    // String, Number, Boolean, Symbol and Object. These types refer to non-primitive boxed objects.
    // Although they can be used types in typescript, it's not recommended.

    let str2: String = 'hello' // no errors, but not recommended.

    function printText(s: string, alignment: "left" | "right" | "center") {
        // ...
    }
    printText("Hello, world", "left");
    printText("G'day, mate", "centre"); // errors, it should be center, not centre.
}


{
    // array
    let arr: (string | number)[] = [100, '200']

    let item = arr[0] //  Only use public methods in Union Types

    // use Generic Types in array
    let arr2: Array<string | number> = [100, '200']
    let item2 = arr[0]
}

{
    // tuple types, https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
    let t: [number, string] = [1, '2']
    let item = t[0] // number type
    let item1 = t[1] // string type
    let item2 = t[2] // error, has no element at index 2
    t.push(2) // no errors
    t.push('3') // no errors
    item2 = t[2] // also error
}

{
    enum E {
        X = 1, // default value is 0
        Y, // 2
        Z // 3
    }

    enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }

    // E and Direction will be compiled into an object.
    // However, const enums will not be.
    const enum Direction1 {
        Up,
        Down,
        Left,
        Right,
    }
       
    let directions = [
        Direction1.Up,
        Direction1.Down,
        Direction1.Left,
        Direction1.Right,
    ];
    /* 
    // in generated code will become
    let directions = [
        0,
        1,
        2,
        3,
    ];
    // no objects.
    */
}

{
    // null and undefined

    // strictNullChecks: false in tsconfig.json.
    // null and undefined can be assigined to any types of variable.
    let a: number = undefined
    console.log(a)

    // strictNullChecks: true. default value.
    let b: number = undefined // error

    // assertion operator
    function liveDangerously(x?: number | null) {
        // No error
        console.log(x!.toFixed());
    }
}

{
    // void, represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements:
    function a () : void {

    }

    function b ()  { // The inferred type is void
        return;
    }
}
{
    // never: Some functions never return a value. 
    // Usually in Infinite loop, throwing error, and conditions that will never be reached
    function whileTrue(): never {
        while(true) {

        }
    }

    function throwError(): never {
        throw Error('error')
    }

    // never also appears when TypeScript determines there’s nothing left in a union.
    function fn(x: string | number) {
        if (typeof x === "string") {
          // do something
        } else if (typeof x === "number") {
          // do something else
        } else {
          x; // has type 'never'!
        }
      }

}

export {}