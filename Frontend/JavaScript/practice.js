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

    
