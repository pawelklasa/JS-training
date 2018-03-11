const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'London';

let html;

// Without template strings (es5)
html = '<ul><li>Hame: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// to put everything neatly on seperate lines you need to conatenate
html = '<ul>' + 
        '<li>Hame: ' + name + ' </li>' +
        '<li>Age: ' + age + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '</ul>';

document.body.innerHTML = html;




