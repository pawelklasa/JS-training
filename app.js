// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54); // create an array using constructor
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// Mutating arrays - add on to end 
numbers.push(250);
// Mutating arrays - add on to front 
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front;
numbers.shift();
// Splice values
numbers.splice(4, 4); // between index 4 and 4
// Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sort 
val = fruit.sort(); // alphabetically

val = numbers.sort(); // this won't work for numbers, you have to use 'compare function'

// Use the 'compare function'
val = numbers.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find 
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);