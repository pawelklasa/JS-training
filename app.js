const firstName = 'Pawel';
const lastName = 'Klasa';
const age = 36;
const str = 'Hello, my name is Pav';

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping ... the backslash is used to ignore the apostrophe
val = 'That\'s awesome I can\'t wait';
// you can also use " " 
val = "That's awesome I can't wait";

// Length 
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// this reads the character in a string based on the index number of the string
val = firstName[0];

// indexOf() - this reads the index number based on the character in the string
val = firstName.indexOf('l');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('2'); // this is simmiliar to firstName[2];

// get last character of the string
val = lastName.charAt(lastName.length - 1);

// substring() 
val = firstName.substring(0, 3);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-2);

// split() - this creates an array of each word in the string
val = str.split(' ');
// you can also split it by coma ','
val = str.split(','); // that creates two items in an array

// replace() - Pav is replaced with Pawel
val = str.replace('Pav', 'Pawel');

// includes()
val = str.includes('Pav');


console.log(val);