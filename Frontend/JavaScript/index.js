// node Frontend/JavaScript/index.js node index.js

/* --- JavaScript Data Types ---

1. Primitive Data Types
-- Primitive data types are immutable (cannot be changed)
-- string
-- number
-- boolean
-- undefined
-- null
-- bigint
-- symbol

-- String: Represents a sequence of characters (text).
let stringValue = "Vishal";
console.log("String:", stringValue, typeof stringValue);

-- Number: Represents both integer and floating-point numbers.
let numberValue = 25;
let floatValue = 99.99;
console.log("Number:", numberValue, typeof numberValue);

-- Boolean: Represents a logical entity and can have two values: true or false.
let booleanValue = true;
console.log("Boolean:", booleanValue, typeof booleanValue);

-- Undefined: Represents a variable that has been declared but not assigned a value.
let undefinedValue;
console.log("Undefined:", undefinedValue, typeof undefinedValue);

-- Null: Represents the intentional absence of any object value.
let nullValue = null;
console.log("Null:", nullValue, typeof nullValue); // Note: typeof null returns 'object' due to a legacy bug

-- BigInt: Represents integers with arbitrary precision (larger than 2^53 - 1).
let bigIntValue = 9007199254740991n;
console.log("BigInt:", bigIntValue, typeof bigIntValue);

-- Symbol: Represents a unique and immutable identifier.
let symbolValue = Symbol("id");
console.log("Symbol:", symbolValue.toString(), typeof symbolValue);

2. Non-Primitive (Reference) Data Types
-- Non-Primitive data types are mutable (can be changed)

-- function 
-- object
-- array

-- Object: Represents a collection of properties (key-value pairs).
let user = {
  name: "Vishal",
  age: 25
};
console.log("Object:", user, typeof user);

-- Array: A special type of object used to store ordered collections of values.
let colors = ["Red", "Green", "Blue"];
console.log("Array:", colors, typeof colors);

-- Function: Represents a block of code that can be executed when called.
function greet() {
  console.log("Hello!");
}
console.log("Function:", greet, typeof greet);
*/

/* Explanation of storage units from Byte up to Yottabyte (decimal and binary/IEC),
// showing unit name, symbol, bytes (decimal: 1 KB = 1000 B) and bytes (binary/IEC: 1 KiB = 1024 B).

const names = [
  "Byte", "Kilobyte", "Megabyte", "Gigabyte",
  "Terabyte", "Petabyte", "Exabyte", "Zettabyte", "Yottabyte"
];
const symbols = ["B","KB","MB","GB","TB","PB","EB","ZB","YB"];
const iecSymbols = ["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"];

// Use BigInt to represent exact byte counts for large units
let decimal = 1n; // 1 byte
let binary = 1n;  // 1 byte (for IEC progression)
console.log("Unit\t\tSymbol\tIEC Symbol\tBytes (decimal)\t\tBytes (binary/IEC)");
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const sym = symbols[i];
  const iec = iecSymbols[i];
  console.log(
    `${name.padEnd(8)}\t${sym}\t\t${iec}\t\t${decimal.toString()} B\t\t${binary.toString()} B`
  );
  decimal *= 1000n; // next decimal unit (KB = 1000 B)
  binary *= 1024n;  // next binary/IEC unit (KiB = 1024 B)
}

 Quick reference conversions (decimal)
 1 KB = 1,000 B
 1 MB = 1,000,000 B (10^6)
 1 GB = 1,000,000,000 B (10^9)
 1 TB = 1,000,000,000,000 B (10^12)
 1 PB = 10^15 B
 1 EB = 10^18 B
 1 ZB = 10^21 B
 1 YB = 10^24 B

 Quick reference conversions (binary/IEC)
 1 KiB = 1,024 B
 1 MiB = 1,048,576 B (1024^2)
 1 GiB = 1,073,741,824 B (1024^3)
 1 TiB = 1024^4 B
 1 PiB = 1024^5 B
 1 EiB = 1024^6 B
 1 ZiB = 1024^7 B
 1 YiB = 1024^8 B 
 */

 /* Operators in JavaScript

-- Arithmetic Operators: +, -, *, /, %, ++, --
-- Assignment Operators: =, +=, -=, *=, /=
-- Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
-- Logical Operators: &&, ||, !
-- Bitwise Operators: &, |, ^, ~, <<, >>, >>>
-- Ternary Operator: condition ? expr1 : expr2
-- Typeof Operator: typeof
-- Instanceof Operator: instanceof
-- Spread Operator: ...
-- Nullish Coalescing Operator: ??
-- Optional Chaining Operator: ?.
*/

/* Arithmetic Operators are used to perform mathematical operations on numbers.

+ Addition operator
- Subtraction operator
* Multiplication operator 
/ Division operator
% Modulus operator (remainder)

/ Increment operator
  Increment operator are of two types:
  1. Prefix Increment: ++variable (increments the value before using it)  
  2. Postfix Increment: variable++ (uses the value first, then increments it)

-- Decrement operator
  Decrement operator are of two types:
  1. Prefix Decrement: --variable (decrements the value before using it)  
  2. Postfix Decrement: variable-- (uses the value first, then decrements it)

let a = 10;
let b = 3; 
console.log("Addition:", a + b);          // 13
console.log("Subtraction:", a - b);       // 7
console.log("Multiplication:", a * b);    // 30
console.log("Division:", a / b);         // 3.3333...
console.log("Modulus:", a % b);          // 1
console.log("Increment:", ++a);          // 11
console.log("Decrement:", --b);          // 2 
*/

/* Assignment Operators are used to assign values to variables.

= Simple assignment operator
+= Addition assignment operator
-= Subtraction assignment operator
*= Multiplication assignment operator
/= Division assignment operator

let x = 5;          // Simple assignment
x += 3;     // x = x + 3; now x is 8
x -= 2;     // x = x - 2; now x is 6
x *= 4;     // x = x * 4; now x is 24
x /= 6;     // x = x / 6; now x is 4
console.log("Final value of x:", x); // 4
*/

/* Comparison Operators are used to compare two values and return a boolean result.

== Equal to operator (loose equality)
/=== Strict equal to operator
!= Not equal to operator (loose inequality)
/!== Strict not equal to operator
> Greater than operator
< Less than operator
>= Greater than or equal to operator
<= Less than or equal to operator

let p = 10;
let q = "10";
console.log("p == q:", p == q);          // true (loose equality)
console.log("p === q:", p === q);        // false (strict equality)
console.log("p != q:", p != q);          // false (loose inequality)
console.log("p !== q:", p !== q);        // true (strict inequality)
console.log("p > 5:", p > 5);            // true
console.log("p < 15:", p < 15);         // true
console.log("p >= 10:", p >= 10);        // true
console.log("p <= 9:", p <= 9);          // false
*/

/* Logical Operators are used to combine multiple boolean expressions.

&& Logical AND operator
|| Logical OR operator
! Logical NOT operator

let a = true;
let b = false;    
console.log("a && b:", a && b); // false
console.log("a || b:", a || b); // true
console.log("!a:", !a);         // false
*/

/* Ternary Operator is a shorthand for an if-else statement.

condition ? expr1 : expr2   
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); // Yes
*/

/* Typeof Operator is used to determine the type of a variable or expression.

typeof variable
let value = 42;
let name = "Vishal";
console.log("Type of value:", typeof value); // number
console.log("Type of name:", typeof name);   // strings
*/

/* Instanceof Operator is used to check if an object is an instance of a specific class or constructor.

instanceof constructor
let date = new Date();
console.log("date instanceof Date:", date instanceof Date); // true
*/

/* Spread Operator is used to expand elements of an iterable (like an array) or properties of an object.
...iterable
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
console.log("arr2:", arr2);
*/

/* Nullish Coalescing Operator is used to provide a default value when dealing with null or undefined.
variable ?? defaultValue
let userInput = null;
let defaultText = "Default";
let displayText = userInput ?? defaultText;
console.log("Display Text:", displayText); // Default
*/

/* Optional Chaining Operator is used to safely access nested object properties.
object?.property
let user = { name: "Vishal", address: { city: "New York" } };
let city = user.address?.city;  // "New York"
let zip = user.address?.zip;      // undefined (no error)
console.log("City:", city);
console.log("Zip:", zip);
*/

/* stack and heap memory in JavaScript

Stack Memory:
- store heap memory address of heap memory

Heap Memory: 
- heap address stored in stack memory
- stores immutable data types (numbers, strings, booleans, etc.)
- stores mutable data types (objects, arrays, functions, etc.)
*/

/* Garbage Collection in JavaScript
- automatic memory management
- automatic memory cleanup
- automatic memory deallocation
- check data is used or not if data in used it's mark true and if data is not used it's mark false and deallocate memory
*/

/* Memory Leaks in JavaScript
- memory that is no longer needed but not released
- causes performance issues
- common causes:
  1. Global Variables 
  2. Forgotten Timers or Callbacks
  3. Detached DOM Elements
  4. Closures retaining references
- prevention:
  1. Use local variables  
  2. Clear timers and callbacks
  3. Remove references to unused DOM elements
  4. Be cautious with closures
*/

/* Operators in JavaScript 

1. Arithmetic Operators: +, -, *, /, %, **, ++, --
-> Used for mathematical operations.
-- Addition (+): Adds two numbers.
-- Subtraction (-): Subtracts one number from another.
-- Multiplication (*): Multiplies two numbers.
-- Division (/): Divides one number by another.
-- Modulus (%): Returns the remainder of a division operation.
-- Exponentiation (**): Raises a number to the power of another.
-- Increment (++): Increases a number by one.
-- Decrement (--): Decreases a number by one.

2. Assignment Operators: =, +=, -=, *=, /=, %=
-> Used to assign values to variables.
-- Simple Assignment (=): Assigns a value to a variable.
-- Addition Assignment (+=): Adds a value to a variable and assigns the result.
-- Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result.
-- Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result.
-- Division Assignment (/=): Divides a variable by a value and assigns the result.
-- Modulus Assignment (%=): Applies modulus operation and assigns the result.

3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
-> Used to compare two values.
-- Equal to (==): Checks if two values are equal (type coercion).
-- Strict Equal to (===): Checks if two values are equal (no type coercion).
-- Not Equal to (!=): Checks if two values are not equal (type coercion).
-- Strict Not Equal to (!==): Checks if two values are not equal (no type coercion).
-- Greater than (>): Checks if the left value is greater than the right value.
-- Less than (<): Checks if the left value is less than the right value.
-- Greater than or Equal to (>=): Checks if the left value is greater than or equal to the right value.
-- Less than or Equal to (<=): Checks if the left value is less than or equal to the right value. 

4. Logical Operators: &&, ||, !
-> Used to combine multiple boolean expressions.
-- Logical AND (&&): Returns true if both operands are true.
-- Logical OR (||): Returns true if at least one operand is true.
-- Logical NOT (!): Inverts the boolean value of an operand.

5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
-> Used to perform bit-level operations on integers.
-- AND (&): Performs a bitwise AND operation.
-- OR (|): Performs a bitwise OR operation.
-- XOR (^): Performs a bitwise XOR operation.
-- NOT (~): Inverts the bits of a number.
-- Left Shift (<<): Shifts bits to the left.
-- Right Shift (>>): Shifts bits to the right.
-- Unsigned Right Shift (>>>): Shifts bits to the right, filling with zeros.

6. Ternary Operator: condition ? expr1 : expr2
-> A shorthand for an if-else statement.
-- Evaluates a condition and returns expr1 if true, otherwise returns expr2.

7. Typeof Operator: typeof
-> Used to determine the type of a variable or expression.
-- Returns a string indicating the type (e.g., "number", "string", "object").
*/

/* Operators conversion in JavaScript

- Type Coercion with Arithmetic Operators
-- let sum = '5' - 2; // 3 (string '5' is converted to number)
-- let product = '5' * '2'; // 10 (both strings are converted to numbers)
-- let sum = '5' + 2; // '52' (number 2 is converted to string) // String Concatenation
-- let result = true + 1; // 2 (true is converted to 1)
-- let result = false + 1; // 1 (false is converted to 0)
-- let result = null + 5; // 5 (null is converted to 0)
-- let result = undefined + 5; // NaN (undefined is converted to NaN)
-- let result = '10' / '2'; // 5 (both strings are converted to numbers)

- Type Coercion with Comparison Operators
-- let isEqual = '5' == 5; // true (string '5' is converted to number)
-- let isNotEqual = '5' != 5; // false (string '5' is converted to number)
-- let isGreater = '10' > 5; // true (string '10' is converted to number)
-- let isLess = '3' < 5; // true (string '3' is converted to number)
-- let isGreaterOrEqual = '5' >= 5; // true (string '5' is converted to number)
-- let isLessOrEqual = '3' <= 5; // true (string '3' is converted to number)

- Type Coercion with Logical Operators
-- let result = 'Hello' && 42; // 42 (both operands are truthy, returns last operand)
-- let result = 0 || 'World'; // 'World' (0 is falsy, returns second operand)
-- let result = !'Hello'; // false (non-empty string is truthy, negation returns false)

-> console.log examples:
-- console.log(typeof ('5' + 2)); // 52 'string'
-- console.log(typeof ('5' - 2)); // 3 'number'
-- console.log(typeof ('10' / '2')); // 5 'number'
-- console.log(typeof (true + 1)); // 2 'number'
-- console.log(typeof ('5' == 5)); // true 'boolean'
-- console.log(typeof boolean (true)); // 'boolean'
-- console.log(typeof boolean (false)); // 'boolean'
-- console.log(typeof boolean ('')); // false 'boolean'
-- console.log(typeof boolean (0)); // false 'boolean'
-- console.log(typeof boolean (1)); // true 'boolean'
-- console.log(typeof boolean (null)); // false 'boolean'
-- console.log(typeof boolean (undefined)); // false 'boolean'
*/

/* Truthy and Falsy Values in JavaScript

- Truthy Values:
-- Non-empty strings: "hello", "0", "false"
-- Non-zero numbers: 1, -1, 3.14
-- Objects: {}, []  
-- Functions: function() {}
-- true 

- Falsy Values:
-- Empty  string: ""
-- Number 0: 0
-- null
-- undefined
-- NaN
-- false  

-> Example:
    let values = ["hello", "", 1, 0, {}, null, undefined, [], NaN, true, false];  
    values.forEach(value => {
      if (value) {
        console.log(`${JSON.stringify(value)} is Truthy`);  
      } else {
        console.log(`${JSON.stringify(value)} is Falsy`);  
      } 
    });
*/

/*string operations in JavaScript 
let str1 = "Hello";
let str2 = "World";
let concatenated = str1 + " " + str2;
console.log(concatenated); // Hello World

//length
console.log(concatenated.length); // 11
//toUpperCase
console.log(concatenated.toUpperCase()); // HELLO WORLD
//toLowerCase
console.log(concatenated.toLowerCase()); // hello world
//charAt
console.log(concatenated.charAt(0)); // H
//indexOf
console.log(concatenated.indexOf("World")); // 6
//substring
console.log(concatenated.substring(0, 5)); // Hello
//split
console.log(concatenated.split(" ")); // [ 'Hello', 'World' ]
//replace
console.log(concatenated.replace("World", "JavaScript")); // Hello JavaScript
//includes
console.log(concatenated.includes("Hello")); // true
//trim
let str3 = "   Hello World   ";
console.log(str3.trim()); // "Hello World"
//template literals
let name = "Vishal";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log(greeting); // Hello, Vishal! Welcome to JavaScript.
//multi-line string
let multiLineStr = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLineStr);
//escape sequences
let escapeStr = "He said, \"Hello World!\"\nWelcome to JavaScript.";
console.log(escapeStr); 
*/

/* Date and Time in JavaScript
let now = new Date();
console.log(now.toString());
console.log("Year:", now.getFullYear()); // Year
console.log("Month:", now.getMonth() + 1); // Months are zero-based
console.log("Date:", now.getDate()); // Day of the month
console.log("Hours:", now.getHours()); // Hours
console.log("Minutes:", now.getMinutes()); // Minutes
console.log("Seconds:", now.getSeconds()); // Seconds
console.log("Milliseconds:", now.getMilliseconds()); // Milliseconds

// Create a specific date
let specificDate = new Date("2023-01-01T10:00:00");
console.log("Specific Date:", specificDate.toString());
*/

/* Array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";
console.log(fruit1, fruit2, fruit3); // Apple Banana Orange 

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3

fruits.push("Mango");
console.log(fruits); // [ 'Apple', 'Banana', 'Orange', 'Mango' ]


fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana', 'Orange' ]

fruits.shift();
console.log(fruits); // [ 'Banana', 'Orange' ]

fruits.unshift("Grapes");
console.log(fruits); // [ 'Grapes', 'Banana', 'Orange' ]

fruits.splice(1, 0, "Kiwi");
console.log(fruits); // [ 'Grapes', 'Kiwi', 'Banana', 'Orange' ]

let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // [ 'Kiwi', 'Banana' ]

let arr = [1, 2, 3, 4, 5, 10, 20, 30];
for (let i = 0; i <arr.length; i++) {
  console.log(arr[i]);
}

//for of loop
for(let num of arr){
  console.log(num);
} 

// Combine Arrays using concat method and spread operator 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = ["vishal", 2, true];

console.log(arr1, arr2, arr3); // [ 1, 2, 3 ] [ 4, 5, 6 ] [ 'vishal', 2, true ]

console.log(arr1.concat(arr2, arr3)); // [ 1, 2, 3, 4, 5, 6, 'vishal', 2, true ]

// concat method
let combineArr1 = arr1.concat(arr2, arr3);
console.log(combineArr1); // [ 1, 2, 3, 4, 5, 6, 'vishal', 2, true ]

// spread operator
let combineArr2 = [...arr1, ...arr2, ...arr3];
console.log(combineArr2); // [ 1, 2, 3, 4, 5, 6, 'vishal', 2, true ]
*/

// Spread Operator in JavaScript
const arr1 =[1, 4];
const arr2 = [2, 3];
const arr3 = [arr1[0], ...arr2, arr1[1]];

console.log(arr3); // [ 1, 2, 3, 4 ]

//  node index.js