USE YAN_MyBase

--1
SELECT *
FROM Работники
WHERE WorkerID IN (
    SELECT WorkerID
    FROM Выполненная_работа
    WHERE Количество_деталей > 100
) AND Фамилия LIKE '%ов%';

--2
SELECT Р.*
FROM Работники Р
INNER JOIN (
    SELECT WorkerID
    FROM Выполненная_работа
    WHERE Количество_деталей > 100
) ВР ON Р.WorkerID = ВР.WorkerID
WHERE Р.Фамилия LIKE '%ов%';

--3
SELECT TOP 5 WITH TIES Р.Фамилия, Р.Имя, Р.Отчество, SUM(ВР.Количество_деталей) as ОбщееКоличествоДеталей
FROM Работники Р
INNER JOIN Выполненная_работа ВР ON Р.WorkerID = ВР.WorkerID
GROUP BY Р.WorkerID, Р.Фамилия, Р.Имя, Р.Отчество
ORDER BY ОбщееКоличествоДеталей DESC;

--4
SELECT Р.*
FROM Работники Р
WHERE EXISTS (
    SELECT 1
    FROM Выполненная_работа ВР
    WHERE ВР.WorkerID = Р.WorkerID AND ВР.Количество_деталей > 100
);

--5
SELECT 
    (SELECT AVG(Стаж) FROM Работники) as СреднийСтаж,
    (SELECT AVG(Количество_деталей) FROM Выполненная_работа) as СреднееКоличествоДеталей,
    (SELECT AVG(OperationID) FROM Операции) as СреднийIDОперации

--6
SELECT Р.Фамилия, Р.Имя, Р.Отчество
FROM Работники Р
WHERE Р.Стаж > ALL (
    SELECT AVG(ВР.Количество_деталей / 50)
    FROM Выполненная_работа ВР
    GROUP BY ВР.WorkerID
);

--7
SELECT Р.Фамилия, Р.Имя, Р.Отчество
FROM Работники Р
WHERE Р.Стаж > ANY (
    SELECT AVG(ВР.Количество_деталей / 50)
    FROM Выполненная_работа ВР
    GROUP BY ВР.WorkerID
);
