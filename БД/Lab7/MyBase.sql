USE YAN_MyBase;

--1
go
CREATE or ALTER VIEW Работник AS 
SELECT WorkerID AS код, 
       Фамилия, 
       Имя, 
       Отчество,
       Адрес,
       Телефон,
       Стаж
FROM Работники;

--2
go
CREATE or ALTER VIEW Количество_работ AS
SELECT WorkerID AS работник, COUNT(OperationID) AS количество_работ
FROM Выполненная_работа
GROUP BY WorkerID;

--3
go
CREATE or ALTER VIEW Сложные_операции AS
SELECT OperationID AS код, 
       Наименование
FROM Операции
WHERE Признак_сложности LIKE 'Сложная%';

--4
go
CREATE or ALTER VIEW Средние_операции AS
SELECT OperationID AS код, 
       Наименование
FROM Операции
WHERE Признак_сложности LIKE 'Средняя%';

--5
go
CREATE or ALTER VIEW Операции_по_алфавиту AS
SELECT TOP 100 PERCENT OperationID AS код, 
       Наименование, 
       Признак_сложности
FROM Операции
ORDER BY Наименование;

--6
go
CREATE OR ALTER VIEW Количество_работ
WITH SCHEMABINDING
AS
SELECT WorkerID AS работник, COUNT_BIG(*) AS количество_работ
FROM dbo.Выполненная_работа
GROUP BY WorkerID;

go
SELECT * FROM Работник;
SELECT * FROM Количество_работ;
SELECT * FROM Сложные_операции;
SELECT * FROM Средние_операции;
SELECT * FROM Операции_по_алфавиту;
SELECT * FROM Количество_работ;