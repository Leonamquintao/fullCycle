const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

const isNull: null = null;
const notDefined: undefined = undefined;

// built in objects
const toady: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 11, 14, 21];

// Classes
class Car {
  color: string;
  model: string;
  km: number;
  brand: string;
}

let car: Car = new Car();

// Objects Literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
/* declaration | expect params | return | function it self */
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const carMakers = ['Honda', 'Ford', 'GM', 'Fiat', 'Volkswagen'];
const firstMaker = carMakers[0];
const myCar = carMakers.pop();
