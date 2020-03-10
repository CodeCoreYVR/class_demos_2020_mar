// Defining (declaring) variables in javascript:

// let, const, var

// let is block scoped
// var is function scoped
// we cannot reassign a variable that's declared with `const`
// and the variables with const must be assigned when we
// declare them

// use const as much as you can. In other cases use let.
// var is to be avoided

let a = 5;
var b = 10;
const d = 2;

let n;
var x;
const m; // that won't work because we have initialize variables at the spot with const

let a = 1, b, c = 5, d = 10;


// conditional operators
let grade = 77;

if(grade > 60) {
    console.log("good"); // 👈 this will run because grade is greater than 50
} else if(grade > 50) {
    console.log('pass');
} else {
    console.log('fail');
}

grade > 50 ? console.log('pass') : console.log('fail');

// Booleans (true & false)

// OR operator
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// AND operator
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// comparisons
// == only check if the values are equal
// === check if the values and the types are equal
1 == 1; // true
1 == 2; // false
'1' == 1; // true
'1' === 1; // false

// > checks if a value is greater than another
// >= checks if a value is greater than OR equal to another value
// < checks if a value is less than another value
// <= checks if a value is less than or equal another
1 >= 1; // true
1 <= 5; // true
2 <= 1; // false

// mathmatical operations (binary)
1 + 2; // 3
5 - 4; // 1
5 * 5; // 25
10 / 2; // 5
20 % 3; // 2
2 ** 3; // 8

// uniary operations
let i = 1;
i++; // get the value of (i);
++i; // increament (i) then get its value
i--; // get the value of (i) then decreament it 
--i; // decreament (i) then get its value

i = i + 1; // i += 1
i = i / 2; // i /= 2;
// when expressions can be written in many different ways
// that's called "syntax sugar"



