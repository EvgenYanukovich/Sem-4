let square = {
    color: 'yellow',
    size: 'big'
};

let squareSmall = {
    size: 'small'
};

squareSmall.__proto__ = square;

console.log(Object.keys(squareSmall));

console.log(square.color, square.size);
console.log(squareSmall.color, squareSmall.size);
console.log('');

let circle = {
    color: 'white',
    size: 'big'
};

let circleGreen = {
    color: 'green'
};

circleGreen.__proto__ = circle;

console.log(Object.keys(circleGreen));
console.log(circle.color, circle.size);
console.log(circleGreen.color, circleGreen.size);

let triangle = {
    color: 'white',
    countLine: 1
};

let triangle2 = {
    countLine: 3
};

triangle2.__proto__ = triangle;

console.log(Object.keys(triangle2));
console.log(triangle.color, triangle.countLine);
console.log(triangle2.color, triangle2.countLine);
console.log('');

class Human {
    constructor(name, surname, birthYear, address) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.address = address;
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }

    set age(value) {
        this.birthYear = new Date().getFullYear() - value;
    }

    changeAddress(newAddress) {
        this.address = newAddress;
    }
}

const person = new Human('Евгений', 'Янукович', 2004, 'Свердлова 13а');

console.log('Возраст:', person.age);

person.age = 20;
console.log('Новый год рождения:', person.birthYear);

console.log('Старый адрес:', person.address);
person.changeAddress('Белорусская 21');
console.log('Новый адрес:', person.address);

console.log('');

class Student extends Human {
    constructor(name, surname, birthYear, address, faculty, course, group, recordBookNumber) {
        super(name, surname, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBookNumber = recordBookNumber;
    }

    changeCourse(newCourse) {
        this.course = newCourse;
    }

    changeGroup(newGroup) {
        this.group = newGroup;
    }

    getFullName() {
        return `${this.surname} ${this.name}`;
    }
}

const student = new Student('Никита', 'Филон', 2005, 'Белорусская 21', 'ФИТ', 2, 10, '712013001');

console.log('Фамилия и имя:', student.getFullName());
console.log('Текущий курс:', student.course);
console.log('Текущая группа:', student.group);

student.changeCourse(3);
student.changeGroup(9);
console.log('Новый курс:', student.course);
console.log('Новая группа:', student.group);
console.log('');

class Faculty {
    constructor(name, groupCount, studentCount) {
        this.name = name;
        this.groupCount = groupCount;
        this.currentGroupCount = 0;
        this.studentCount = studentCount;
        this.currentStudentCount = 0;
        this.groups = {};
    }

    changeGroupCount(newGroupCount) {
        this.groupCount = newGroupCount;
    }

    changeStudentCount(newStudentCount) {
        this.studentCount = newStudentCount;
    }

    addStudentToGroup(group, student) {
        if (this.currentStudentCount == this.studentCount) {
            console.log('Лимит по студентам превышен!');
            return;
        }

        if (!this.groups[group]) {
            if (this.currentGroupCount == this.groupCount) {
                console.log('Лимит по группам превышен!');
                return;
            }

            this.groups[group] = [];
            this.currentGroupCount++;
        }

        this.groups[group].push(student);

        this.currentStudentCount++;
    }

    getDev() {
        let devStudents = 0;
        for (const group in this.groups) {
            if (this.groups[group]) {
                this.groups[group].forEach(student => {
                    if (student.recordBookNumber[1] == '3') {
                        devStudents++;
                    }
                });
            }
        }
        return devStudents;
    }

    getGroup(groupName) {
        return this.groups[groupName] || [];
    }
}

const faculty = new Faculty('ФИТ', 10, 200);

faculty.addStudentToGroup('10', { name: 'Евгений', recordBookNumber: '732013001' });
faculty.addStudentToGroup('10', { name: 'Никита', recordBookNumber: '612013002' });
faculty.addStudentToGroup('9', { name: 'Виктория', recordBookNumber: '712013003' });

console.log(faculty.getGroup('10'));
console.log('Количество дизайнеров:', faculty.getDev());