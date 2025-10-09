const message: string = "Hello from TypeScript!";
console.log(message);

/* VARIABLE */
let fullname: string = 'M. Defryan';

let anything: string | number = 'Food';
anything = 123;

/* FUNCTION */
function Greeting(time: string, guest: string) {
  // Block of code
}

/* ARRAY */
const arrRandom: [boolean, number, string, string] = [
  true,
  123,
  'Food',
  'Drink',
];
const arrString: string[] = ['Apple', 'Banana'];

/* OBJECT */
const student: { fullname: string; score: number } = {
  fullname: 'M Defryan',
  score: 100,
};

/* Interface / Types */
//                              Type vs Interface
//  Object                  :    OK         OK
//  Intersection & Union    :    OK         x
//  Extend                  :    x          OK

interface User {
  username: string;
  password: string;
}
const user: User = {
  username: 'ryan',
  password: 'abc12345',
};

type Product = {
  name: string;
  weight: number;
};
const product: Product = {
  name: 'Apple',
  weight: 100,
};

/* Intersection */
type ObjA = {
  id: number;
  propsA: string;
};

type ObjB = {
  id: number;
  propsB: string;
};

const newObj: ObjA & ObjB = {
  id: 1,
  propsA: '',
  propsB: '',
};

const newObj1: ObjA | ObjB = {
    id: 1, 
    propsA: ''
}