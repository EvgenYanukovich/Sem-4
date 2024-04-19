//ЗАДАНИЕ 2

function Volume(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

console.log(Volume(1)(2)(5));
console.log(Volume(4)(2)(3));
console.log(Volume(2)(9)(3));


//ЗАДАНИЕ 3
var a = 3;
var b = "hello";

console.log(globalThis.a, globalThis.b);
console.log(globalThis.Volume(1)(2)(3));

globalThis.a = 5;
globalThis.b = "world";

console.log(a, b);

function* MoveObject() {
    let pos = {
        x: 0,
        y: 0
    };
    while (true) {
        let direction = yield pos;
        switch (direction) {
            case 'left':
                pos.x -= 10;
                break;
            case 'right':
                pos.x += 10;
                break;
            case 'up':
                pos.y += 10;
                break;
            case 'down':
                pos.y -= 10;
                break;
            default:
                console.log('Неверная команда!');
                break;
        }
    }
}

let objectMover = MoveObject();
objectMover.next();

while (true) {
    let dir = prompt("Направление", '0').toLowerCase();

    if (dir == 0) break;

    console.log(objectMover.next(dir).value);
}