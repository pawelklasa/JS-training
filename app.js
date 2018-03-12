// if(something){
//   do something
// } else {
//   do something else
// }

const id = 100;

// // Equal to ----------------
// if(id == 100){
//   console.log('Correct!');
// } else {
//   console.log('Wrong!');
// }

// // Not equal to ----------------
// if(id != 101){
//   console.log('Correct!');
// } else {
//   console.log('Wrong!');
// }

// // Equal to valur and type ===   ----------------
// if(id === 100){
//   console.log('Correct!');
// } else {
//   console.log('Wrong!');
// }

// // Not equal to ----------------
// if(id !== 100){
//   console.log('Correct!');
// } else {
//   console.log('Wrong!');
// }

// // Test if undefined ----------------
// if(typeof id !== 'undefined'){
//   console.log(`The ID id ${id}`);
// } else {
//   console.log('No ID');
// }

// // Greater or less then ----------------
// if(id >= 200){
//   console.log('Correct!');
// } else {
//   console.log('Wrong!');
// }

// If else ----------------------

const color = 'yellow';

// if(color === 'red'){
//   console.log('Color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else if(color === 'orange'){
//   console.log('Color is orange');
// } else {
//   console.log('Color is wrong!');
// }

// Logical operators

const name = 'Stevo';
const age = 10;

// And && 'ampersand characters'
if(age > 0 && age < 12){
  console.log(`${name} is a child.`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager.`);
} else if(age >= 20 && age <= 60){
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is gramps!`);
}

// Or ||  'pipe characters'
if(age < 16 ||  age > 65){
  console.log(`${name} cannot run.`);
} else {
  console.log(`${name} can run.`);
}

// Ternary operator - shorthand
console.log(id === 100 ? 'correct' : 'incorrect');
