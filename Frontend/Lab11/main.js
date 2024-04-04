class Task {
    constructor(id, title, completed = false) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class Todolist {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = [];
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    filterTasksByState(completed) {
        return this.tasks.filter(task => task.completed === completed);
    }
}

const todolist1 = new Todolist(1, "Список дел на сегодня");
const todolist2 = new Todolist(2, "Список дел на завтра");

const task1 = new Task(1, "Покормить кота");
const task2 = new Task(2, "Помыть посуду");
const task3 = new Task(3, "Сделать уроки");

todolist1.addTask(task1);
todolist1.addTask(task2);
todolist2.addTask(task3);

console.log("Все задачи в списке todolist1:");
console.log(todolist1.tasks);

console.log("Задачи в списке todolist2, которые еще не выполнены:");
console.log(todolist2.filterTasksByState(false));

// Изменение названия задачи и ее состояния
task1.setTitle("Погулять с собакой");
task1.toggleCompleted();

console.log("Обновленные данные задачи 1:");
console.log(task1);