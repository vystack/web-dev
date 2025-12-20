// node Frontend/JavaScript/practice.js

/* let fName = "vishal";
let lName = "yadav";
let fullName = fName +' '+ lName;
console.log("Full Name:", fullName); //Full Name: vishal yadav

console.log(fName[0]) //v

fName[0] = 'Y' // not allowed in string
console.log(fName[0]) //v */

/* immutable string example
let str = "hello";
console.log("Original String:", str);
console.log("First Character:", str[0]);

// trying to change the first character
str[0] = 'H'; // This will not change the string
console.log("After Attempting to Change First Character:", str);

// correct way to change string
let newStr = 'H' + str.slice(1);
console.log("New String after Modification:", newStr);

// Original String: hello
// First Character: h
// After Attempting to Change First Character: hello
// New String after Modification: Hello */

/* mutable array example
let arr = ['h', 'e', 'l', 'l', 'o'];
console.log("Original Array:", arr);

// changing the first element
arr[0] = 'H';
console.log("Array after Modification:", arr);

// Original Array: [ 'h', 'e', 'l', 'l', 'o' ]
// Array after Modification: [ 'H', 'e', 'l', 'l', 'o' ]

// mutable object example
let obj = { firstChar: 'v', 
            secondChar: 'y'
          };
console.log("Original Object:", obj);

// changing a property
obj.firstChar = 'H';
console.log("Object after Modification:", obj);

// Original Object: { firstChar: 'h', secondChar: 'e' }
// Object after Modification: { firstChar: 'H', secondChar: 'e' } */

/* mutable array example
let arr1 = ['v,', 'i', 's', 'h', 'a', 'l'];
console.log("Original Array:", arr1);

arr1.push ='y'; // adding an element at the end
console.log("Array after push operation:", arr1);

arr1[0] = 'Vishal'; // modifying the first element
console.log("Array after modifying first element:", arr1);

// Original Array: [ 'v,', 'i', 's', 'h', 'a', 'l' ]
// Array after push operation: [ 'v,', 'i', 's', 'h', 'a', 'l' ]
// Array after modifying first element: [ 'Vishal', 'i', 's', 'h', 'a', 'l' ] */

/* logical operator
console.log(true && false); // false
console.log(true && true); // true
console.log(true || false); // true
console.log(!true);         // false */

/*for (let i = 0; i <= 5; i++) {
    console.log(i);
} */

/* Number
let a = 10;
let b = 21.5897;
let c = b.toFixed(2);
console.log("a:", a);
console.log("b:", b);
console.log("c:", c); */

/*let number = 15;

if (number % 2 === 0) {
    console.log(`Number ${number} is Even`);
} else {
    console.log(`Number ${number} is Odd`);
} */

/*console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Random number between 0 and 1  
console.log(Math.floor(4.7)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.max(1, 5, 3, 9, 2)); // 9
console.log(Math.min(1, 5, 3, 9, 2)); // 1
*/

/*console.log(Math.floor(Math.random()*10)+1); // random number between 1 to 10
console.log(Math.floor(Math.random()*6)+1); // random number between 1 to 6 (like dice)
console.log(Math.floor(Math.random()*100)+1); // random number between 1 to 100
console.log(Math.floor(Math.random()*50)+1); // random number between 1 to 50
console.log(Math.floor(Math.random()*20)+1); // random number between 1 to 20
console.log(Math.floor(Math.random()*500)+1); // random number between 1 to 500
console.log(Math.floor(Math.random()*1000)+1); // random number between 1 to 1000
console.log(Math.max(10, 50, 200, 1500, 750)); // 1500
console.log(Math.min(10, 50, 200, 1500, 750)); // 10
*/

/* Add random number generation for 1 to 100 in practice.js --- IGNORE ---
function getRandomNumber1to100() {
    return Math.floor(Math.random() * 100) + 1;
}
*/

/*15-25
console.log(Math.floor(Math.random()*11)+15); // random number between 0 and 10
console.log(Math.floor(Math.random()*(25-15+1)+11));
*/

/* types of string literals in JavaScript
let singleQuoteStr = 'Hello, World!';
let doubleQuoteStr = "Hello, World!";
let backtickStr = `Hello, World!`;
console.log(singleQuoteStr);
console.log(doubleQuoteStr);
console.log(backtickStr);
*/

/* Using backticks for multi-line strings and interpolation
let name = "Vishal";
let multiLineStr = `Hello, ${name}! 
Welcome to JavaScript string literals.
Enjoy coding!`;
console.log(multiLineStr);
*/

/*camelCase, PascalCase, snake_case, kebab-case
let camelCaseVar = "This is camelCase";
let PascalCaseVar = "This is PascalCase";
let snake_case_var = "This is snake_case";
let kebab_case_var = "This is kebab-case"; // Note: hyphens are not allowed in variable names
console.log(camelCaseVar);
console.log(PascalCaseVar);
console.log(snake_case_var);
console.log(kebab_case_var);
*/

/* Variable naming conventions
let myVariable = 10; // camelCase
let MyVariable = 20; // PascalCase
let my_variable = 30; // snake_case
let my-variable = 40; // kebab-case (not allowed in JS)  
*/

/* data types in JavaScript
primitive data types: string, number, boolean, null, undefined, symbol, bigint
non-primitive data types: object, array, function 
*/

/* upper case to lowercase and vice versa
let str = "Hello World";
let upperStr = str.toUpperCase();  
let lowerStr = str.toLowerCase();
console.log("Original String:", str);
console.log("Uppercase String:", upperStr);
console.log("Lowercase String:", lowerStr);
*/

/* finding substring
let str = "Hello, welcome to the world of JavaScript.";
let substring1 = str.slice(7, 14); // "welcome"
console.log(substring1);
*/

/*let intro = "Hi, I'm Vishal Yadav";
console.log(intro.indexOf("Vishal")); // 7
console.log(intro.indexOf("Yadav")); // 14
*/

/* string methods
let str = "Hello, welcome to the world of JavaScript.";
console.log(str.length); // 46
*/

/* .includes()
let str = "Hello, how are you?";
console.log(str.includes("are")); // true
*/

/* Combine Arrays using concat method and spread operator and sort them
let arr1 = [1, 5, 4];
let arr2 = [3, 2];
let arr3 = [...arr1, ...arr2].sort((a,b) => a-b);
let arr4 = arr1.concat(arr2).sort();
console.log(arr3); // [ 1, 2, 3, 4, 5 ]
console.log(arr4); // [ 1, 2, 3, 4, 5 ]

arr3.sort((a,b) => a-b);
console.log(arr3); // [ 1, 2, 3, 4 ]

let aar5 = ['Mango', 'apple', 'Kiwi', 'Banana', 'Orange'];
let arr6 = aar5.sort((a,b) => a.localeCompare(b)); // using spread operator to create a copy and then sort
console.log(arr6); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ] 

let arr7 = aar5.concat().sort((a,b) => a.localeCompare(b)); // using concat to create a copy and then sort
console.log(arr7); // [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]
*/

/*object 

const user ={
    name: "Vishal",
    age: 22,
    "user id": 12345
}
user["Home City"] = "Delhi";
console.log(user);
*/

/* truthy and falsy values in JavaScript
Truthy values: All values that are not falsy
Falsy values: false, 0, "", null, undefined, NaN
*/
 /* operators in JavaScript
Arithmetic Operators: +, -, *, /, %, ++, --
Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
Logical Operators: &&, ||, !
Assignment Operators: =, +=, -=, *=, /=, %=
*/

/* conditional statements in JavaScript
if, 
else if, 
else, 
switch
*/

/* array methods in JavaScript
push()
pop()
shift()
unshift()
splice()
slice()
indexOf()
includes()
forEach()
map()
filter()
reduce()
*/
/* push method example
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
*/
/* pop method example
let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.pop();
console.log(fruits); // [ 'apple', 'banana' ]
console.log(removedFruit); // orange
*/
/* shift method example 
let fruits = ['apple', 'banana', 'orange'];
let removedFruit = fruits.shift();
console.log(fruits); // [ 'banana', 'orange' ]
console.log(removedFruit); // apple
*/
/* unshift method example
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
*/
/* splice method example
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 0, 'grape');  // at index 1, remove 0 elements, add 'grape'
console.log(fruits); // [ 'apple', 'grape', 'banana', 'orange' ]
*/



//  node practice.js