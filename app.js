const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 49,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'London',
    county: 'Greater London'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
};

let val;

val = person;
// Get specific value
val = person.lastName; //recomended
//val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.county;
val = person.address['county']; // alternative
val = person.getBirthYear();


console.log(val);


const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 22},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}
