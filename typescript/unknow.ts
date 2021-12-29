let a: unknown = 1
a.say() // errors: Object is of type 'unknown'.ts(2571)

let b: any = 1
b.say() // no error

type r1 = keyof unknown; // never
type r2 = keyof any; // string | number | symbol

type r3 = unknown | string // unknown
type r4 = unknown & string // string

type r5 = any | string // any
type r6 = any & string // any

export {}