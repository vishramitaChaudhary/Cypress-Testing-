console.log('Hello world')
// Variable
let a = 'Mosh';
a = "vish"
console.log(a);

let firstNmae = 'Mosh'; lastName = 'singh';
console.log(firstNmae, lastName);

//Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

const rate = 0.5
//rate = 9;
console.log(rate) // in const can't change the value of declared varable

//primitive value
let nameBank = 'vishu'; //string
let age = 35; //number
let isApproved = true; // boolean
let firstPerson = undefined; //undefined
let selectColor = null; //null

//non primitive are symboles

//Dynamic language - type of a variable can change at runtime

console.log (typeof nameBank);
nameBank = 5;

console.log (typeof nameBank);

//Object example -  person is a object
let person = {
    school: 'Lshs',
    age: 10

};

let school = {
    color: 'red',
    floors: 10,
    area: 'rajendra'
}

console.log (school);

person.age = 09; //properties of object can be changed
//or
person['age'] = '07';
console.log(person);
console.log(person.age);

//Arreys  //arrey is a object
//index= 0 1 2 3 4

let selectColors = ['red','blue']
selectColors[2]= 'green'
selectColors[3]= 5;

console.log(selectColors);
console.log(selectColors.length);
console.log(selectColors);

let size = [7, 8, 3]
size[3]= 8;

console.log (size.length)

//functions= it is an building blocks in JS a function is basically a set of statements that perform a task 

function oldPeople() {
    console.log('Hello world');
}
oldPeople();

function anji(name) {               //anji function is a parameter
    console.log('Hello ' + name);
}
anji('dharani')     //argument actual value supplied to that parameter
anji('pooja')

function square(number){
return number + number;
}

console.log(square(2));  //here we are using two function - console log is 1 and square is 2nd


function priya(name) {

    console.log('hello ' + name)
}