{
    interface Todo {
        title: string;
      }
       
      const todo: Readonly<Todo> = {
        title: "Delete inactive users",
      };
       
      todo.title = "Hello"; // error
}

{
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
    
    todo.info.id = 2 // no errors
    
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
}

{
    interface CatInfo {
        age: number;
        breed: string;
    }
       
    type CatName = "miffy" | "boris" | "mordred";
       
    const cats: Record<CatName, CatInfo> = {
        miffy: { age: 10, breed: "Persian" },
        boris: { age: 5, breed: "Maine Coon" },
        mordred: { age: 16, breed: "British Shorthair" },
    };
       
    cats.boris;
}

{
    // pratice: implement the Assign which is similar to Object.assign
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