//1
function basicOperation(operation, value1, value2) {
    let result;
    if (operation == "+") {
        result = value1 + value2;
    } else if (operation == "-") {
        result = value1 - value2;
    } else if (operation == "*") {
        result = value1 * value2;
    } else if (operation == "/") {
        result = value1 / value2;
    } else {
        result = "";
    }
    return result;
}

let result = basicOperation('+', '5', '10');
console.log(result);

//2
function squareNumber(value1, value2) {
    Math.pow(value1, value2);
}

result = squareNumber(2, 5);
console.log(result);

//3
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

let numbers = [1, 2, 3, 4, 5];
console.log(average(numbers));

//4
function reverseAndFilter(str) {
    let reversed = str.split('').reverse().join('');
    let filtered = reversed.replace(/[^a-zA-Z ]/g, ""); //регулярное выражение ^отрицание -промежуток gГлобально
    return filtered;
}

console.log(reverseAndFilter("JavaScript"));
console.log(reverseAndFilter("JavaScr53э?ipt"));

//5
function repeatString(n, s) {
    return s.repeat(n);
}

console.log(repeatString(3, "Привет"));

//6
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

let arr1 = ["яблоко", "банан", "апельсин"];
let arr2 = ["банан", "киви"];
console.log(difference(arr1, arr2));