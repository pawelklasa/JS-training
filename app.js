// // For loop
// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my fav number');
//     continue;
//   }

//   if(i === 6){
//     console.log('Stop!');
//     break;
//   }

//   console.log('Number ' + i);
// }

// // While loop
// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// Do while
// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 110);

// Loop through an array

const cars = ['Chevy', 'Toyota', 'Porshe', 'BMW'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// For each

cars.forEach(function(car){
  console.log(car);
});

// Map

const users = [
  {id: 1, name: 'Pav'},
  {id: 2, name: 'John'},
  {id: 3, name: 'Alex'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// For in loop

const user = {
  firstName: 'Pav',
  lastName: 'Klasa',
  age: 35
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}

