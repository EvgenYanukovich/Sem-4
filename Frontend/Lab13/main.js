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

    writeValue(row, column, val) {
        if (this.startField[row][column] === null) {
            this.gameField[row][column] = val;
        }
    }

    isEndGame() {
        for (let iRow = 0; iRow < this.fieldSize; iRow++) {
            for (let iColumn = 0; iColumn < this.fieldSize; iColumn++) {
                if (!this.isTrueValue(iRow, iColumn)) return false;
            }
        }
        return true;
    }

    isTrueValue(row, column) {
        return this.gameField[row][column] === this.fullField[row][column]
    }

    displayInHtml(grid) {
        const tableCont = document.querySelector('.table-cont');
        tableCont.innerHTML = '';

        const table = this.createTable(grid);
        tableCont.appendChild(table);

    }

    createTable(grid) {
        const table = document.createElement('table');
        for (let i = 0; i < this.fieldSize; i++) {
            const row = this.createRow(grid, i);
            table.appendChild(row);
        }
        return table;
    }

    createRow(grid, i) {
        const row = document.createElement('tr');

        for (let j = 0; j < this.fieldSize; j++) {
            const cell = this.createCell(grid, i, j);
            row.appendChild(cell);
        }

        return row;
    }

    createCell(grid, row, col) {
        const cellData = grid[row][col];
        const cell = document.createElement('td');

        cell.textContent = cellData !== null ? cellData : '';
        cell.classList.add('no-active');
        cell.dataset.row = row;
        cell.dataset.column = col;

        cell.addEventListener('click', function() {
            const cells = document.querySelectorAll('td');

            cells.forEach(cell => {
                cell.classList.remove('pass-active');
                cell.classList.remove('pass-num-active');
                cell.classList.remove('active');
            });

            for (let i = 0; i < grid.length; i++) {
                cells[i * grid.length + col].classList.add('pass-active');
                cells[row * grid.length + i].classList.add('pass-active');
            }

            if (!(cellData == null)) {
                for (let i = 0; i < grid.length; i++) {
                    for (let j = 0; j < grid.length; j++) {
                        if (grid[i][j] === cellData) {
                            cells[i * grid.length + j].classList.add('pass-num-active');
                        }
                    }
                }
            }

            this.classList.add('active');
        });

        return cell;
    }

    flashCells(color, duration, cellsToFlash) {
        const cells = document.querySelectorAll('td');
        cells.forEach(cell => {
            cell.classList.remove('flash-red', 'flash-green');
        });

        console.log(cellsToFlash);
        cellsToFlash.forEach(({ row, col }) => {
            const cell = document.querySelector(`td[data-row="${row}"][data-column="${col}"]`);
            cell.classList.add(`flash-${color}`);
        });

        setTimeout(() => {
            cellsToFlash.forEach(({ row, col }) => {
                const cell = document.querySelector(`td[data-row="${row}"][data-column="${col}"]`);
                cell.classList.remove('flash-red', 'flash-green');
                cell.style.backgroundColor = '';
            });
        }, duration);
    }

    resetGame() {
        this.gameField = structuredClone(this.startField);
        this.displayInHtml(this.gameField);
    }

    showGame() {
        this.gameField = structuredClone(this.fullField);
        this.displayInHtml(this.gameField);
        setTimeout(() => {
            this.showModal('./img/showGame.png', 'Сдались? Попробуйте ещё раз!', 'Новая игра', this, 'hideModalAndNewGame');
        }, 1000);
    }

    newGame() {
        this.fullField = this.generateSudoku();
        this.startField = this.removeCells(this.fullField, this.difficulty);
        this.gameField = structuredClone(this.startField);
        this.displayInHtml(this.gameField);
    }

    checkRows() {
        let incorrectCells = [];

        for (let row = 0; row < this.fieldSize; row++) {
            let seen = new Set();
            let incorrSeen = new Set();
            for (let col = 0; col < this.fieldSize; col++) {
                let num = this.gameField[row][col];
                if (num !== null) {
                    if (seen.has(num)) {
                        incorrSeen.add(num);
                    } else {
                        seen.add(num);
                    }
                }
            }

            for (let col = 0; col < this.fieldSize; col++) {
                let num = this.gameField[row][col];
                if (incorrSeen.has(num)) {
                    incorrectCells.push({ row, col });
                }
            }
        }


        return incorrectCells;
    }

    checkColumns() {
        let incorrectCells = [];

        for (let col = 0; col < this.fieldSize; col++) {
            let seen = new Set();
            let incorrSeen = new Set();
            for (let row = 0; row < this.fieldSize; row++) {
                let num = this.gameField[row][col];
                if (num !== null) {
                    if (seen.has(num)) {
                        incorrSeen.add(num);
                    } else {
                        seen.add(num);
                    }
                }
            }

            for (let row = 0; row < this.fieldSize; row++) {
                let num = this.gameField[row][col];
                if (incorrSeen.has(num)) {
                    incorrectCells.push({ row, col });
                }
            }
        }

        return incorrectCells;
    }

    checkBoxes() {
        let incorrectCells = [];

        for (let startRow = 0; startRow < this.fieldSize; startRow += this.boxSize) {
            for (let startCol = 0; startCol < this.fieldSize; startCol += this.boxSize) {
                let seen = new Set();
                let incorrSeen = new Set();
                for (let row = startRow; row < startRow + this.boxSize; row++) {
                    for (let col = startCol; col < startCol + this.boxSize; col++) {
                        let num = this.gameField[row][col];
                        if (num !== null) {
                            if (seen.has(num)) {
                                incorrSeen.add(num);
                            } else {
                                seen.add(num);
                            }
                        }
                    }
                }

                for (let row = startRow; row < startRow + this.boxSize; row++) {
                    for (let col = startCol; col < startCol + this.boxSize; col++) {
                        let num = this.gameField[row][col];
                        if (incorrSeen.has(num)) {
                            incorrectCells.push({ row, col });
                        }
                    }
                }
            }
        }

        return incorrectCells;
    }

    checkGame() {
        let incorrectCells = [];

        const rowsIncorrect = this.checkRows();
        const colsIncorrect = this.checkColumns();
        const boxesIncorrect = this.checkBoxes();

        incorrectCells = [...rowsIncorrect, ...colsIncorrect, ...boxesIncorrect];

        let correct = incorrectCells.length == 0;
        let filled = true;

        this.gameField.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                console.log(cell)
                if (cell === null) {
                    filled = false;
                }
            });
        });

        if (correct && filled) {
            this.flashCells('green', 1000, this.gameField.flatMap((row, rowIndex) => row.map((_, colIndex) => ({ row: rowIndex, col: colIndex }))));
            setTimeout(() => {
                this.showModal('./img/checkWin.png', 'Результат проверки: Вы победили!', 'Новая игра', this, 'newGame');
            }, 1000);
        } else if (correct) {
            this.flashCells('green', 1000, this.gameField.flatMap((row, rowIndex) => row.map((cell, colIndex) => {
                if (cell !== null && cell === this.fullField[rowIndex][colIndex] && cell !== this.startField[rowIndex][colIndex]) {
                    return { row: rowIndex, col: colIndex };
                } else {
                    return null;
                }
            })).filter(cell => cell != null));
            setTimeout(() => {
                this.showModal('./img/checkTrue.png', 'Результат проверки: Заполнено верно! Продолжайте заполнять судоку', 'Продолжить', this, 'hideModal');
            }, 1000);
        } else {
            this.flashCells('red', 1000, incorrectCells);
            setTimeout(() => {
                this.showModal('./img/checkFalse.png', 'Результат проверки: Заполнено неверно! Исправьте ошибки и продолжайте заполнять судоку', 'Продолжить', this, 'hideModal');
            }, 1000);
        }
    }

    showModal(imageSrc, text, buttonText, obj, btnAction) {
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalImage = document.querySelector('.modal-image');
        const modalText = document.querySelector('.modal-text');
        const modalButton = document.querySelector('.modal-button');
        modalImage.src = imageSrc;
        modalText.textContent = text;
        modalButton.textContent = buttonText;
        modalButton.removeEventListener('click', this[btnAction]); // Удаляем предыдущий обработчик
        modalButton.addEventListener('click', this[btnAction].bind(this)); // Привязываем новый обработчик
        modalOverlay.style.display = 'block';
    }

    hideModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.style.display = 'none';
    }

    hideModalAndNewGame() {
        const modalOverlay = document.querySelector('.modal-overlay');
        modalOverlay.style.display = 'none';
        this.newGame();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sudoku = new Sudoku(9, 3, 50); // Создаем экземпляр класса Sudoku

    sudoku.displayInHtml(sudoku.gameField); // Отображаем игровое поле при загрузке страницы

    const numButtons = document.querySelectorAll('.num');
    numButtons.forEach(button => {
        button.addEventListener('click', function() {
            const activeCell = document.querySelector('.active');
            if (activeCell) {
                const row = parseInt(activeCell.dataset.row);
                const column = parseInt(activeCell.dataset.column);
                const value = parseInt(this.textContent);
                console.log(row, column, value)
                sudoku.writeValue(row, column, value);
                sudoku.displayInHtml(sudoku.gameField);
            }
        });
    });

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', function() {
        const activeCell = document.querySelector('.active');
        if (activeCell) {
            const row = parseInt(activeCell.dataset.row);
            const column = parseInt(activeCell.dataset.column);
            sudoku.writeValue(row, column, null);
            sudoku.displayInHtml(sudoku.gameField);
        }
    });

    const againButton = document.querySelector('.again');
    againButton.addEventListener('click', function() {
        sudoku.resetGame();
    });

    const checkButton = document.querySelector('.check');
    checkButton.addEventListener('click', function() {
        sudoku.checkGame();
    });

    const showButton = document.querySelector('.show');
    showButton.addEventListener('click', function() {
        sudoku.showGame();
    });

    const generationButton = document.querySelector('.generation');
    generationButton.addEventListener('click', function() {
        sudoku.newGame();
    });

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        sudoku.hideModal();
    });

    document.addEventListener('keydown', function(event) {
        const activeCell = document.querySelector('.active');
        if (activeCell) {
            const key = event.key;
            if (!isNaN(key) && key >= 1 && key <= 9) {
                const row = parseInt(activeCell.dataset.row);
                const column = parseInt(activeCell.dataset.column);
                sudoku.writeValue(row, column, parseInt(key));
                sudoku.displayInHtml(sudoku.gameField);
            }
        }
    });
});