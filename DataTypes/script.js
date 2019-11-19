///////////////////////////////////////
// Lecture: Hoisting

var frankYear = 1984;
var year = 2019;

var ageFrank = 35;
var ageMike = 26;

var age = year - frankYear;

console.log(age);
console.log(ageFrank > ageMike);
console.log(ageMike > ageFrank);

// var firstName = 'Frank';
// var age = 35;

// console.log(age);

// age = 'Twenty five';

// console.log(age);

// alert(age);

// var lastName = prompt('What is your name :)');

// console.log(lastName);
// var lastName = 'Uzoka';

// console.log(firstName + ' ' + lastName + ' ' + age);

// var fullAge = true;

// console.log(fullAge);

// var job;
// // variable not declared yet
// console.log(job);

// job = 'Developer';

// console.log(job);

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
