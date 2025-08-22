const conpany: string = "CESAR School";
let age: number = 19;
let passwordIsCorrect: boolean = false;

// tipos undefined ou null
let text: string | undefined;
let message: string | null = null;

// Arrays
let arr: Array<number> = [1, 2, 3];
let array: number[] = [1, 2, 3];

arr.push(4);
array.push(7);

// Objetos
// forma direta
const persona: { name:string, age:number } = {
    name:"Astrodev",
    age: 22
}

// Classe 
type person = {
    name: string,
    age: number
}
// objeto da classe person
const dev: person = {
    name: "Davi",
    age: 19
}

//function
function sum (
    a: number,
    b: number
): number {
    return a + b;
}

// function void
function helloWorld(): void{
    console.log("Hello World");
}

//function com parametros opcionais
function sayHello(name?: string): void{
    console.log("Hello,", name || "World");
}

helloWorld();
sayHello("Dave");
console.log(conpany);
console.log(arr);
console.log(age);
console.log(array);