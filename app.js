const name = 'John';
const age = 32;
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

// With template strings/literals (es6) use `bacticks`
function hello() {
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;

document.body.innerHTML = html;

