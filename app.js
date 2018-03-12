// Function declartions

function greet(firstName = 'Pawel', lastName = 'Klasa'){ // with defaults
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

let val;

val = greet('John', 'Klasa'); // John overrides dafault which is Pawel

console.log(val);

document.body.innerHTML = val;


// Function expresions - basically assigning function named or not to a variable


const square = function(x = 3){ // default is 3
  return x*x;
}; // semicolon because it is a variable

console.log(square(9));

// Immidiately Invokable function expressions - IIFEs

(function(name){
  console.log('Hello ' + name);
})('Brad');

// Property methods - when function put into an object

const todo = {
  add: function(x = 2){
    console.log('Add todo..' + ' ' + x*x);
  }
}

todo.delete = function(){
  console.log('Delete todo...');
}

todo.add(6);
todo.delete();



