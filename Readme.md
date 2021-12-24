# Front End Blog / 前端博客 https://terence-cheng.github.io/Frontend_Blog/
## 浏览器原理
### 浏览器渲染流程 
[1. 浏览器渲染流程(1) — 渲染主流程](https://github.com/Terence-Cheng/Frontend_Blog/issues/2)

[2. 浏览器渲染流程(2) — JS、CSS 对渲染流程的影响](https://github.com/Terence-Cheng/Frontend_Blog/issues/3)



## React
### React 原理
[1. React原理之首次渲染——JSX, React.createElement, ReactDom.render](https://github.com/Terence-Cheng/Frontend_Blog/issues/4)

## Leetcode

### Find Set Map
[leetcode 451.Sort Characters By Frequency](https://github.com/Terence-Cheng/Frontend_Blog/issues/5)

[leetcode 1.Two Sum](https://github.com/Terence-Cheng/Frontend_Blog/issues/6)

[leetcode 146.LRU Cache](https://github.com/Terence-Cheng/Frontend_Blog/issues/7)

### Two points
[leetcode 15.Three Sum](https://github.com/Terence-Cheng/Frontend_Blog/blob/main/leetcode/15.3-sum.ts)

[leetcode 18.Four Sum](https://github.com/Terence-Cheng/Frontend_Blog/blob/main/leetcode/18.4-sum.ts)

### Linked List


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

```
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
todo.title = "Hello"; // error
```

But, It is not the deep constraint.

```
interface Info {
    id: number;
    text: string;
}

interface Todo {
    title: string;
    info: Info
}
   
const todo: Readonly<Todo> = {
    title: "Delete inactive users",
    info: {
        id: 1,
        text: 'content'
    }
};

todo.info.id = 2 // no errors.
```

Let's implement the DeepReadonly

```
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