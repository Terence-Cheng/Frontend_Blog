{
    class Pointer {
        x: number = 1;
        y: number = 2;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    
    const p = new Pointer(1, 2)
    console.log(p)
}

{
    class Pointer {
        constructor(public x: number, public y: number) {}
    }
    
    const p = new Pointer(1, 2)
    console.log(p)
}


{
    class Animal {
        constructor(public name: string) {

        }
    }

    class Cat extends Animal {
        age: number = 1;
        constructor(name: string, age: number) {
            super(name)
            this.age = age;
        }
    }
}

{
    class Person {
        constructor(public name: string) {
            this.name = name
        }
        age: number = 1; // example
        eat = () => { // example
            console.log('eat')
        }
        get d () { // prototype
            return 10000
        }
        private say() { // prototype
            console.log('hello')
        }
        static c = 2
    }

    const p1 = new Person('Tom')
    const p2 = new Person('Jerry')
    
}

export {}