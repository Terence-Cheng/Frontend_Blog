## TypeScript
### Generics
A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable.

#### Generics Constraints
You can declare a type parameter that is constrained by another type parameter.

https://github.com/Terence-Cheng/Frontend_Blog/blob/main/typescript/generics.ts

### Intersection Types
interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

https://github.com/Terence-Cheng/Frontend_Blog/blob/main/typescript/intersection_types.ts

### Union Types
TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. 

It might be confusing that a union of types appears to have the intersection of those types’ properties. This is not an accident - the name union comes from type theory.

https://github.com/Terence-Cheng/Frontend_Blog/blob/main/typescript/union_types.ts

### Distributive Conditional Types
When conditional types act on a generic type, they become distributive when given a union type. 

Union Types have the distributive conditional types.

https://github.com/Terence-Cheng/Frontend_Blog/blob/main/typescript/distrybutive_conditional_types.ts

### Utility Types

#### Exclude<Type, ExcludedUnion>
Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

#### Extract<Type, Union>
Constructs a type by extracting from Type all union members that are assignable to Union.

#### NonNullable<Type>
Constructs a type by excluding null and undefined from Type.

#### Partial<Type>
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

#### Required<Type>
Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

#### Readonly<Type>
Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

But, It is not the deep constraint.

Let's implement the DeepReadonly

```
interface Info {
    id: number;
    text: string;
}

interface Todo {
    title: string;
    info: Info
}
type DeepReadonly<T> = {readonly [K in keyof T] : T[K] extends object ? DeepReadonly<T[K]> : T[K] }

const todo2: DeepReadonly<Todo> = {
    title: "Delete inactive users",
    info: {
        id: 1,
        text: 'content'
    }
};

todo2.title = 'new' // error
todo2.info.id = 3 // error
```

https://github.com/Terence-Cheng/Frontend_Blog/blob/main/typescript/unility_types.ts

#### Pick<Type, Keys>
Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
```

#### Omit<Type, Keys>
Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
```
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
```

#### Record
Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

#### Pratice: Assign
pratice: implement the Assign which is similar to Object.assign.

```
{
    interface Todo1 {
        id: number,
        title: string,
    }

    interface Todo2 {
        id: number,
        content: string,
    }

    /* 

    Assign(Todo1, Todo2)

    {
        id: number,
        title: string,
        content: string,
    }
    
    */

    type Diff<T, K> = Omit<T, keyof K>

    type Assign<T, K> = Diff<T, K> & K

    type MergedTodo = Assign<Todo1, Todo2>
}
```