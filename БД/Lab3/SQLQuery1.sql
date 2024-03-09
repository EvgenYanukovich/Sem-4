

CREATE DATABASE YAN_MyBase
ON PRIMARY 
(NAME = YAN_MyBase_data,
    FILENAME = 'C:\\SQLData\\YAN_MyBase_data.mdf',
    SIZE = 10,
    MAXSIZE = 50,
    FILEGROWTH = 5),
FILEGROUP YAN_MyBase_FG1
(NAME = YAN_MyBase_data_FG1,
    FILENAME = 'C:\\SQLData\\YAN_MyBase_data_FG1.ndf',
    SIZE = 5MB,
    MAXSIZE = 100MB,
    FILEGROWTH = 5MB);
USE YAN_MyBase;

CREATE TABLE Работники (
    WorkerID INT PRIMARY KEY,
    Фамилия NVARCHAR(50),
    Имя NVARCHAR(50),
    Отчество NVARCHAR(50),
    Адрес NVARCHAR(100),
    Телефон NVARCHAR(15),
    Стаж INT
);

CREATE TABLE Операции (
    OperationID INT PRIMARY KEY,
    Наименование NVARCHAR(100),
    Признак_сложности NVARCHAR(50)
);

CREATE TABLE Выполненная_работа (
    WorkID INT PRIMARY KEY,
    WorkerID INT FOREIGN KEY REFERENCES Работники(WorkerID),
    OperationID INT FOREIGN KEY REFERENCES Операции(OperationID),
    Количество_деталей INT,
    Дата DATE
);

ALTER TABLE Работники ADD Возраст INT;
ALTER TABLE Работники DROP COLUMN Возраст;

INSERT INTO Работники (WorkerID, Фамилия, Имя, Отчество, Адрес, Телефон, Стаж)
VALUES 
(1, 'Иванов', 'Иван', 'Иванович', 'ул. Ленина, 1', '+375291111111', 10),
(2, 'Петров', 'Петр', 'Петрович', 'ул. Советская, 2', '+375292222222', 15),
(3, 'Сидоров', 'Сидор', 'Сидорович', 'ул. Пушкина, 3', '+375293333333', 20),
(4, 'Алексеев', 'Алексей', 'Алексеевич', 'ул. Гагарина, 4', '+375294444444', 25),
(5, 'Николаев', 'Николай', 'Николаевич', 'ул. Космонавтов, 5', '+375295555555', 30);

INSERT INTO Операции (OperationID, Наименование, Признак_сложности)
VALUES 
(1, 'Операция 1', 'Сложная'),
(2, 'Операция 2', 'Средняя'),
(3, 'Операция 3', 'Простая'),
(4, 'Операция 4', 'Сложная'),
(5, 'Операция 5', 'Средняя');

INSERT INTO Выполненная_работа (WorkID, WorkerID, OperationID, Количество_деталей, Дата)
VALUES 
(1, 1, 1, 100, '2024-02-20'),
(2, 2, 2, 200, '2024-02-19'),
(3, 3, 3, 300, '2024-02-18'),
(4, 4, 4, 400, '2024-02-17'),
(5, 5, 5, 500, '2024-02-16');

SELECT * FROM Работники;
SELECT Фамилия, Имя FROM Работники;
SELECT COUNT(*) FROM Работники;
UPDATE Работники SET Фамилия = 'Смирнов' WHERE WorkerID = 1;
SELECT * FROM Работники;
