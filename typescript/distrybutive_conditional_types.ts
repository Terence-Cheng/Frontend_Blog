type ToArray<Type> = Type extends any ? Type[] : never;
 
type StrArrOrNumArr = ToArray<string | number>;
