var conpany = "CESAR School";
var age = 19;
var passwordIsCorrect = false;
// tipos undefined ou null
var text;
var message = null;
// Arrays
var arr = [1, 2, 3];
var array = [1, 2, 3];
arr.push(4);
array.push(7);
// Objetos
// forma direta
var persona = {
    name: "Astrodev",
    age: 22
};
// objeto da classe person
var dev = {
    name: "Davi",
    age: 19
};
//function
function sum(a, b) {
    return a + b;
}
// function void
function helloWorld() {
    console.log("Hello World");
}
//function com parametros opcionais
function sayHello(name) {
    console.log("Hello,", name || "World");
}
helloWorld();
sayHello("Dave");
console.log(conpany);
console.log(arr);
console.log(age);
console.log(array);
