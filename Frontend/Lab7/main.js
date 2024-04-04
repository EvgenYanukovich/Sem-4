//Задание 1

let products = {
    "Обувь": {
        "Ботинки": [{
                "номер": 1,
                "размер": 41,
                "цвет": "черный",
                "цена": 1000
            },
            {
                "номер": 2,
                "размер": 40,
                "цвет": "коричневый",
                "цена": 1200
            }
        ],
        "Кроссовки": [{
                "номер": 3,
                "размер": 39,
                "цвет": "синий",
                "цена": 800
            },
            {
                "номер": 4,
                "размер": 41,
                "цвет": "черный",
                "цена": 900
            }
        ],
        "Сандали": [{
                "номер": 5,
                "размер": 38,
                "цвет": "коричневый",
                "цена": 600
            },
            {
                "номер": 6,
                "размер": 37,
                "цвет": "белый",
                "цена": 700
            }
        ]
    }
};

//Задание 2

function Filter(minPrice, maxPrice, color, size) {
    let arrObjects = Object.keys(products['Обувь']).map(key => (products['Обувь'][key]));

    let newArrObjects = [];
    arrObjects.forEach(elem => {
        newArrObjects.push(...elem);
    });

    return newArrObjects.filter(key => (key['цена'] >= minPrice &&
        key['цена'] <= maxPrice &&
        key['размер'] == size &&
        key['цвет'] == color)).map(key => key['номер']);
}

console.log(Filter(800, 1200, 'черный', 41))

//Задание 3-4

let newProducts = {
    "Обувь": {
        "Ботинки": [{
                "номер": 1,
                "размер": 42,
                "цвет": "черный",
                "скидка": 0.1,
                "стоимость": 900,
            },
            {
                "номер": 2,
                "размер": 40,
                "цвет": "коричневый",
                "скидка": 0.2,
                "стоимость": 960
            }
        ],
        "Кроссовки": [{
                "номер": 3,
                "размер": 39,
                "цвет": "синий",
                "скидка": 0.15,
                "стоимость": 680
            },
            {
                "номер": 4,
                "размер": 41,
                "цвет": "черный",
                "скидка": 0.1,
                "стоимость": 810
            }
        ],
        "Сандалии": [{
                "номер": 5,
                "размер": 38,
                "цвет": "коричневый",
                "скидка": 0.2,
                "стоимость": 480
            },
            {
                "номер": 6,
                "размер": 37,
                "цвет": "белый",
                "скидка": 0.1,
                "стоимость": 630
            }
        ]
    }
};

for (let category in newProducts['Обувь']) {
    for (let shoe in newProducts['Обувь'][category]) {
        Object.defineProperties(newProducts['Обувь'][category][shoe], {
            'цена': {
                get() {
                    return this['стоимость'] * (1 - this['скидка']);
                },
                configurable: false
            },
            'номер': {
                writable: false,
                enumerable: true,
                configurable: false
            }
        });
    }
}

console.log(newProducts['Обувь']['Ботинки'][0]['цена']);

//Задание 5-6

function Shoe(number, size, color, discount, cost) {
    this['номер'] = number;
    this['размер'] = size;
    this['цвет'] = color;
    this['скидка'] = discount;
    this['стоимость'] = cost;

    Object.defineProperties(this, {
        'цена': {
            get() {
                return this['стоимость'] * (1 - this['скидка']);
            },
            configurable: false
        },
        'номер': {
            writable: false,
            enumerable: true,
            configurable: false
        }
    });
}

let allProducts = {
    "Обувь": {
        "Ботинки": [
            new Shoe(1, 42, "черный", 0.1, 900),
            new Shoe(2, 40, "коричневый", 0.2, 960)
        ],
        "Кроссовки": [
            new Shoe(3, 39, "синий", 0.15, 680),
            new Shoe(4, 41, "черный", 0.1, 810)
        ],
        "Сандалии": [
            new Shoe(5, 38, "коричневый", 0.2, 480),
            new Shoe(6, 37, "белый", 0.1, 630)
        ]
    }
};

console.log(allProducts);