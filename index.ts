// number
// string
// null
// undefined
// any

let a: number = 3;
let b: string = `love you`;
let c: any = 4;
let d: number | string = `asdf`;
let e: string[] = [`apple`, `mango`];

function addNumber(a: number, b: number): number {
  return a + b;
}
addNumber(3, 7);