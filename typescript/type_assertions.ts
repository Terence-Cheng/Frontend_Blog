const myApp = document.getElementById("app");

// const myApp: HTMLElement | null
myApp.style.width = '180px'; // error

(myApp as HTMLElement).style.width = '180px'; // no error

myApp!.style.width = '180px'; // ! is a typescript not null assertion, it means it is a Non-null Assertion Operator.

// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
const x = "hello" as number; // error

const y = "hello" as any as number; // no error




// Optional chaining, Stage 4	
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
const dogName = adventurer.dog?.name;
console.log(dogName); // undefined
console.log(adventurer.dog.name) // VM101:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name'))

// Nullish coalescing operator, staging 4
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const foo = null ?? 'default string';
console.log(foo); // expected output: "default string"


const baz = 0 ?? 42;
console.log(baz); // expected output: 0



export {}