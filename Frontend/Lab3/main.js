//Задание 1
const nestedArrays = [1, [1, 2, [3, 4]],
    [2, 4]
];

const flatArray = nestedArrays.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
        return acc.concat(curr.reduce((acc, val) => acc.concat(val), []));
    } else {
        return acc.concat(curr);
    }
}, []);

console.log(flatArray);
document.querySelector('.zad1').textContent = flatArray;

//Задание 2
const sum = flatArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
document.querySelector('.zad2').textContent = sum;

//Задание 3
const students = [
    { name: 'Алексей', age: 20, groupId: 1 },
    { name: 'Елена', age: 18, groupId: 2 },
    { name: 'Иван', age: 22, groupId: 1 },
    { name: 'Евгений', age: 16, groupId: 1 },
];

const filteredStudents = students.filter(student => student.age > 17);

const groupedStudents = filteredStudents.reduce((acc, student) => {
    if (!acc[student.groupId]) {
        acc[student.groupId] = [];
    }
    acc[student.groupId].push(student);
    return acc;
}, {});

console.log(groupedStudents);

document.querySelector('.zad3').innerHTML = Object.entries(groupedStudents).map(([groupId, students]) => `
    <div class="group">
        <div class="group-title">Группа ${groupId}:</div>
        ${students.map(student => `<div class="student">${student.name} (${student.age} лет)</div>`).join('')}
    </div>
`).join('');
//document.querySelector('.zad3').innerHTML = JSON.stringify(groupedStudents, null, 2);

//Задание 4
const inputString = 'ABC';
let total1 = '';

for (let i = 0; i < inputString.length; i++) {
    total1 += inputString.charCodeAt(i);
}

const total2 = total1.split('').reduce((acc, element) => {
    if (element == '7') {
        return acc += '1';
    } else {
        return acc += element;
    }
}, '');

const result = total1 - total2;
console.log(result);
document.querySelector('.zad4').textContent = result;

//Задание 5
function extend(...objects){
    let new_obj = {};
    
    for(let obj of objects){
        Object.assign(new_obj, ...Object.keys(obj)
                                  .filter(key => !(key in new_obj))
                                  .map(key => ({[key] : obj[key]}))
        );
    }
    
    return new_obj;
}

let extendResult = extend({a: 1, b: 2}, {a: 3, c: 3}, {d: 3, b: 3});
console.log(extendResult);
document.querySelector('.zad5').textContent = JSON.stringify(extendResult, null, 2);


//Задание 6
function buildTower(height) {
    const tower = [];
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i);
        const stars = '*'.repeat(2 * i - 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}

const towerHeight = 3;
const tower = buildTower(towerHeight);
console.log(tower.join('\n'));
document.querySelector('.zad6').textContent = JSON.stringify(tower, null, 2);