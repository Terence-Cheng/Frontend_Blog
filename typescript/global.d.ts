interface Window {
    info: object
}
interface Number {
    toFixed2(): void
}

declare namespace myLib {
    let timeout: number;
}