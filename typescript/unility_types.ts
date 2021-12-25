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
