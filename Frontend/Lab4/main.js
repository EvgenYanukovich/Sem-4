//Задание 1
class ProductSet {
    constructor() {
        this.products = new Set();
    }

    addProduct(product) {
        this.products.add(product);
    }

    removeProduct(product) {
        this.products.delete(product);
    }

    hasProduct(product) {
        return this.products.has(product);
    }

    getProductCount() {
        return this.products.size;
    }

    displayProductsHTML() {
        let productList = Array.from(this.products).join(', ');
        document.body.innerHTML += `<p>Список товаров: ${productList}</p>`;
    }
}

let myProducts = new ProductSet();
myProducts.addProduct("Товар 1");
myProducts.addProduct("Товар 2");
myProducts.displayProductsHTML();

//Задание 2
class Student {
    constructor(number, group, name) {
        this.number = number;
        this.group = group;
        this.name = name;
    }

    displayInfoHTML() {
        let studentInfo = `Номер зачетки: ${this.number}, Группа: ${this.group}, ФИО: ${this.name}`;
        document.body.innerHTML += `<p>${studentInfo}</p>`;
    }
}

class StudentSet {
    constructor() {
        this.students = new Set();
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.add(student);
        } else {
            console.log("Попытка добавить студента провалилась");
        }
    }

    removeStudentByNumber(number) {
        for (let student of this.students) {
            if (student.number === number) {
                this.students.delete(student);
                break;
            }
        }
    }

    filterByGroup(group) {
        let filteredStudents = new Set();
        for (let student of this.students) {
            if (student.group === group) {
                filteredStudents.add(student);
            }
        }
        return filteredStudents;
    }

    sortByNumber() {
        return Array.from(this.students).sort((a, b) => a.number - b.number);
    }

    displayStudentsHTML() {
        document.body.innerHTML += '<h2>Список студентов:</h2>';
        for (let student of this.students) {
            student.displayInfoHTML();
        }
    }
}

let myStudents = new StudentSet();
myStudents.addStudent(new Student(1, 'A', 'Иванов Иван Иванович'));
myStudents.addStudent(new Student(2, 'B', 'Петров Петр Петрович'));
myStudents.displayStudentsHTML();

//Задание 3
class Product {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class ProductMap {
    constructor() {
        this.products = new Map();
    }

    addProduct(product) {
        if (product instanceof Product) {
            this.products.set(product.id, product);
        } else {
            console.log("Попытка добавить товар провалилась");
        }
    }

    removeProductById(id) {
        this.products.delete(id);
    }

    removeProductsByName(name) {
        for (let [id, product] of this.products) {
            if (product.name === name) {
                this.products.delete(id);
            }
        }
    }

    changeProductQuantity(id, quantity) {
        let product = this.products.get(id);
        if (product) {
            product.quantity = quantity;
        }
    }

    changeProductPrice(id, price) {
        let product = this.products.get(id);
        if (product) {
            product.price = price;
        }
    }

    calculatePositions() {
        return this.products.size;
    }

    calculateTotalPrice() {
        let total = 0;
        for (let product of this.products.values()) {
            total += product.price * product.quantity;
        }
        return total;
    }

    displayProductsHTML() {
        document.body.innerHTML += '<h2>Список товаров:</h2>';
        for (let product of this.products.values()) {
            let productInfo = `ID: ${product.id}, Название: ${product.name}, Количество: ${product.quantity}, Цена: ${product.price}`;
            document.body.innerHTML += `<p>${productInfo}</p>`;
        }
    }
}

let Products = new ProductMap();
Products.addProduct(new Product(1, 'Товар 1', 10, 100));
Products.addProduct(new Product(2, 'Товар 2', 5, 200));
console.log(Products.calculatePositions());
console.log(Products.calculateTotalPrice());
Products.changeProductQuantity(1, 20);
Products.changeProductPrice(2, 300);
Products.displayProductsHTML();
Products.removeProductById(1);
Products.removeProductsByName('Товар 2');

//Задание 4
let cache = new WeakMap();

function cacheFunction(key, a, b) {
    if (cache.has(key)) {
        console.log("Использование кэша");
        return cache.get(key);
    }

    let result = sum(a, b);
    cache.set(key, result);

    console.log("Вычисление и сохранение в кэше");
    return result;
}

let sum = (a, b) => a + b;

let key1 = {};
let key2 = {};

console.log(cacheFunction(key1, 1, 2));
console.log(cacheFunction(key2, 1, 3));
console.log(cacheFunction(key1, 1, 4));