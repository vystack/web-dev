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
console.log(Math.floor(Math.random()*10)+1); // random number between 1 to 10
console.log(Math.floor(Math.random()*6)+1); // random number between 1 to 6 (like dice)
console.log(Math.floor(Math.random()*100)+1); // random number between 1 to 100
console.log(Math.floor(Math.random()*50)+1); // random number between 1 to 50
console.log(Math.floor(Math.random()*20)+1); // random number between 1 to 20
console.log(Math.floor(Math.random()*500)+1); // random number between 1 to 500
console.log(Math.floor(Math.random()*1000)+1); // random number between 1 to 1000
console.log(Math.max(10, 50, 200, 1500, 750)); // 1500
console.log(Math.min(10, 50, 200, 1500, 750)); // 10

