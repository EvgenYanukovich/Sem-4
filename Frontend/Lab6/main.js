//Задание 1

let number = [1, 2, 3];

let [first, , s] = number;

console.log(first, s);



//Задание 2

let user = {
    name: 'Evgeniy',
    age: '18'
};

let admin = {
    admin: 'admin',
    ...user
};

let { name: n, age } = user;

console.log(admin);



//Задание 3

let store = {
    state: { // 1 уровень
        profilePage: { // 2 уровень
            posts: [ // 3 уровень
                {
                    id: 1,
                    message: 'Hi',
                    likesCount: 12
                },
                {
                    id: 2,
                    message: 'By',
                    likesCount: 1
                }
            ],
            newPostText: 'About me'
        },
        dialogsPage: {
            dialogs: [{
                    id: 1,
                    name: 'Valera'
                },
                {
                    id: 2,
                    name: 'Andrey'
                },
                {
                    id: 3,
                    name: 'Sasha'
                },
                {
                    id: 4,
                    name: 'Viktor'
                }
            ],
            messages: [{
                    id: 1,
                    message: 'hi'
                },
                {
                    id: 2,
                    message: 'hi hi'
                },
                {
                    id: 3,
                    message: 'hi hi hi'
                }
            ]
        },
        sidebar: []
    }
}

let {
    state: {
        profilePage: {
            posts,
            newPostText
        },
        dialogsPage: {
            dialogs,
            messages
        },
        sidebar
    }
} = store;

for (let elem of posts) {
    console.log(elem.likesCount);
}

console.log(dialogs = dialogs.filter(elem => elem.id % 2 == 0));

for (let i = 0; i < messages.length; i++) {
    messages[i].message = "Hello world";
}

console.log(messages);



//Задание 4

let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQl", isDone: false }
];

let task = { id: 6, title: "TS", isDone: true };

tasks = [...tasks, task];

console.log(tasks);



//Задание 5

let arr = [1, 2, 3];

function Sum(a, b, c) {
    return a + b + c;
}

console.log(Sum(...arr))