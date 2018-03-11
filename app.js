let val;

const today = new Date();
let birthday = new Date('4-6-1982 11:12:20');
birthday = new Date('April 6 1982');
birthday = new Date('4/6/1982');


val = today.getMonth(); // index number of a month
val = today. getDate(); // number of the day
val = today.getDay(); // index number of a day starting sunday
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(3);
birthday.setDate(12);
birthday.setFullYear(1983);



console.log(birthday);
