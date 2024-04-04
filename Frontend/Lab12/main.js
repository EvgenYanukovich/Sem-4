class Sudoku {
    constructor(fieldSize, boxSize, difficulty) {
        this.fieldSize = fieldSize;
        this.boxSize = boxSize;
        this.difficulty = difficulty;
        this.fullField = this.generateSudoku();
        this.startField = this.removeCells(this.fullField, this.difficulty);
        this.gameField = structuredClone(this.startField);
    }

    generateSudoku() {
        let field = this.newEmptyField();
        this.fillField(field);
        return field;
    }

    newEmptyField() {
        return new Array(this.fieldSize).fill().map(() => Array(this.fieldSize).fill(null));
    }

    fillField(grid) {
        const emptyCell = this.findEmptyCell(grid);
        if (!emptyCell) return true;

        const numbers = this.getRandomNumb();

        for (let i = 0; i < numbers.length; i++) {
            if (!this.validate(grid, emptyCell.row, emptyCell.column, numbers[i])) continue;

            grid[emptyCell.row][emptyCell.column] = numbers[i];

            if (this.fillField(grid)) return true;

            grid[emptyCell.row][emptyCell.column] = null;
        }
    }

    findEmptyCell(grid) {
        for (let row = 0; row < this.fieldSize; row++) {
            for (let column = 0; column < this.fieldSize; column++) {
                if (grid[row][column] === null) return { row, column };
            }
        }
        return null;
    }

    getRandomNumb() {
        const numbers = Array.from(new Array(this.fieldSize), (_, i) => i + 1);

        for (let i = numbers.length - 1; i >= 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[randIndex]] = [numbers[randIndex], numbers[i]];
        }

        return numbers;
    }

    validate(field, row, col, number) {
        return this.validateRow(field, row, col, number) &&
            this.validateColumn(field, row, col, number) &&
            this.validateBox(field, row, col, number);
    }

    validateColumn(grid, row, column, value) {
        for (let iRow = 0; iRow < this.fieldSize; iRow++) {
            if (grid[iRow][column] === value && iRow !== row) return false;
        }
        return true;
    }

    validateRow(grid, row, column, value) {
        for (let iColumn = 0; iColumn < this.fieldSize; iColumn++) {
            if (grid[row][iColumn] === value && iColumn !== column) return false;
        }
        return true;
    }

    validateBox(grid, row, column, value) {
        const firstRowInBox = row - row % this.boxSize;
        const firstColumnInBox = column - column % this.boxSize;

        for (let iRow = firstRowInBox; iRow < firstRowInBox + this.boxSize; iRow++) {
            for (let iColumn = firstColumnInBox; iColumn < firstColumnInBox + this.boxSize; iColumn++) {
                if (grid[iRow][iColumn] === value && iRow !== row && iColumn !== column) return false;
            }
        }
        return true;
    }

    removeCells(grid, DIFFICULTY) {
        const resultGrid = [...grid].map(row => [...row]);

        let i = 0;
        while (i < DIFFICULTY) {
            let row = Math.floor(Math.random() * this.fieldSize);
            let column = Math.floor(Math.random() * this.fieldSize);
            if (resultGrid[row][column] !== null) {
                resultGrid[row][column] = null;
                i++;
            }
        }

        return resultGrid;
    }

    checkValue(row, col, val) {

        if (this.fullField[row][col] !== val) {
            console.log("Вы ввели неправильное число!");
            return false;
        }
        this.gameField[row][col] = val;

        if (this.isEndGame()) {
            console.log('Вы разгадали судоку. Напишите \'reset\' для перезаупка игры')
        }

        console.clear();
        console.table(this.gameField);
        return true;
    }

    isEndGame() {
        for (let iRow = 0; iRow < this.fieldSize; iRow++) {
            for (let iColumn = 0; iColumn < this.fieldSize; iColumn++) {
                if (this.fullField[iRow][iColumn] !== this.gameField[iRow][iColumn]) return false;
            }
        }
        return true;
    }

    resetGame() {
        console.clear();
        this.startField = this.removeCells(this.fullField, this.difficulty);
        this.gameField = structuredClone(this.startField);
        console.table(this.gameField);
    }
}

let sudoku = new Sudoku(9, 3, 30);
console.table(sudoku.gameField);

do {
    let [row, col, val] = prompt('Введите строку, столбец и значение через пробел', [0, 0, 0]).split(' ');
    console.log(row, col, val);
    sudoku.checkValue(row - 1, col - 1, +val);
    if (row === 'reset') {
        sudoku.resetGame();
    }
    flag = false;
    if (+val != 0) {
        flag = true;
    }
} while (flag);