//Задача 1
console.log("Задание 1");
let a = 5;
console.log("a = 5 имеет тип: " + typeof(a));
let name = "Name";
console.log("name = \"Name\" имеет тип: " + typeof(name));
let i = 0;
console.log("i = 0 имеет тип: " + typeof(i));
let double = 0.23;
console.log("double = 0.23 имеет тип: " + typeof(double));
let result = 1/0;
console.log("result = 1/0 имеет тип: " + typeof(result));
let answer = true;
console.log("answer = true имеет тип: " + typeof(answer));
let no = null;
console.log("no = null имеет тип: " + typeof(no));

//Задача 2
console.log("Задание 2");
let width = Math.floor(45 / 5);
let height = Math.floor(21 / 5);
let num_square = width*height;
console.log("Можно получить " + num_square + "квадратов");

//Задача 3
console.log("Задание 3");
i = 2;
a = ++i;
let b = i++;
console.log(a == b);

//Задача 4
console.log("Задание 4");
console.log("Котик" == "котик" ? "Элементы равны" : "Элементы не равны");
console.log("Котик" == "китик" ? "Элементы равны" : "Элементы не равны");
console.log("Кот" == "Котик" ? "Элементы равны" : "Элементы не равны");
console.log("Привет" == "Пока" ? "Элементы равны" : "Элементы не равны");
console.log(73 == "53" ? "Элементы равны" : "Элементы не равны");
console.log(false == 0 ? "Элементы равны" : "Элементы не равны");
console.log(54 == true ? "Элементы равны" : "Элементы не равны");
console.log(123 == false ? "Элементы равны" : "Элементы не равны");
console.log(true == "3" ? "Элементы равны" : "Элементы не равны");
console.log(3 == "5мм" ? "Элементы равны" : "Элементы не равны");
console.log(8 == "-2" ? "Элементы равны" : "Элементы не равны");
console.log(34 == "34" ? "Элементы равны" : "Элементы не равны");
console.log(34 === "34" ? "Элементы равны" : "Элементы не равны");
console.log(null == undefined ? "Элементы равны" : "Элементы не равны");
console.log(null === undefined ? "Элементы равны" : "Элементы не равны");

//Задача 5
let teacherName = "Алина".toLowerCase();
let userName = prompt("Введите ваше имя:", "").toLowerCase().split(" ");
let isMatch = userName.some(element => element == teacherName);
isMatch ? alert("Имена совпали.") : alert("Имена не совпали.");

//Задача 6
let examResult = prompt("Введите результаты экзаменов в формате \"сдал\" или \"провалил\" через пробел.").toLowerCase().split(" ");
if (examResult[0] == "сдал" && examResult[1] == "сдал" && examResult[2] == "сдал") {
    alert("Вы сдали все экзамены.");
}
else if (examResult[0] == "провалил" && examResult[1] == "провалил" && examResult[2] == "провалил") {
    alert("Вы провалили все экзамены.")    
}
else {
    alert("У Вас есть пересдачи.")
}

//Задача 7
console.log("Задание 7");
console.log(true + true);
console.log(0 + "5");
console.log(5 + "мм");
console.log(8 / Infinity);
console.log(null - 1);
console.log("5" - 2);
console.log("5px" - 3);
console.log(true - 3);
console.log(7 || 0);

//Задача 8
console.log("Задание 8");
let array = [];
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        array.push(i + 2);
    } else {
        array.push(i + 'мм');
    }
}
console.log(array);

//Задача 9
// Реализация через объект
let daysObj = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    7: 'вс'
};
let dayNumber = prompt("Введите номер дня недели");
alert(daysObj[dayNumber]);
// Реализация через массив
let daysArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
dayNumber = prompt("Введите номер дня недели");
alert(daysArr[dayNumber - 1]);

//Задача 10
console.log("Задание 10");
function createString(param1 = 'default', param2, param3) {
    param3 = prompt("Введите значение для третьего параметра");
    return param1 + ', ' + param2 + ', ' + param3;
}
let funcResult = createString(undefined,'val1');
console.log(funcResult);

//Задача 11
console.log("Задание 11");
let val1 = 5;
let val2 = 5;
// Function Declaration
function params(val1, val2) {
    if (val1 === val2) {
        return 4 * val1; 
    } else {
        return val1 * val2; 
    }
}
let paramsDeclaration = params(val1, val2);
// Function Expression
let paramsExpression = function(val1, val2) {
    if (val1 === val2) {
        return 4 * val1; 
    } else {
        return val1 * val2; 
    }
};
// Arrow Function
let paramsArrow = (val1, val2) => {
    if (val1 === val2) {
        return 4 * val1; 
    } else {
        return val1 * val2; 
    }
};

console.log("Function Declaration: " + paramsDeclaration);
console.log("Function Expression: " + paramsExpression(val1, val2));
console.log("Arrow Function: " + paramsArrow(val1, val2));