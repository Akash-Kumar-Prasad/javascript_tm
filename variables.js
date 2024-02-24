//var, let, const

var name = "John Doe"

console.log(name);

name = "Steve Smith"

console.log(name);

//init var
var greeting;
console.log(greeting);
greeting = "Hello World"
console.log(greeting);

//letters, numbers, _, $
//cannot start with number

//multi word variables

var firstName = "Sarah"//camelcase
var first_name = "John"//underscore
var FirstName = "Dave"//pascal case

var firstname;

//LET

let fname;
fname='hitesh'
console.log(fname);
fname='choudhary'
console.log(fname);

//CONST

const lname ="kumar"
console.log(lname);
//cannot reassign
//lname="sara"
//have to assign a value

const person = {
  Fname:"Babu",
  age:30
}
person.Fname="Roger"
person.age=45
console.log(person);

const numbers = [1,2,3,4,5,6,7]
numbers.push(8)
numbers.pop()
console.log(numbers);
