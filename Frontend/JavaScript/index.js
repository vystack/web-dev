// node index.js

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
