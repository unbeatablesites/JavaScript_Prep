///////////////////////////////////////
// Lecture: Hoisting

var firstName = 'Frank';
var lastName = 'Uzoka';
var age = 35;

console.log(firstName + ' ' + lastName + ' ' + age);

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

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
