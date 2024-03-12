USE YAN_MyBase;

--1
SELECT *
FROM Работники R INNER JOIN Выполненная_работа W 
ON R.WorkerID = W.WorkerID

--2
SELECT *
FROM Работники R INNER JOIN Выполненная_работа W 
ON R.WorkerID = W.WorkerID
WHERE R.WorkerID Like '1';

--3
SELECT 
    R.Фамилия, 
    R.Имя, 
    O.Наименование,
    CASE 
        WHEN W.Количество_деталей BETWEEN 1 AND 100 THEN 'Низкое'
        WHEN W.Количество_деталей BETWEEN 101 AND 200 THEN 'Среднее'
        WHEN W.Количество_деталей > 200 THEN 'Высокое'
    END AS Уровень_производительности
FROM 
	Работники R
INNER JOIN Выполненная_работа W ON R.WorkerID = W.WorkerID
INNER JOIN Операции O ON W.OperationID = O.OperationID;

--4
SELECT 
    R.Фамилия, 
    R.Имя, 
    O.Наименование,
    ISNULL(W.Количество_деталей, 0)
FROM 
    Работники R
LEFT OUTER JOIN Выполненная_работа W ON R.WorkerID = W.WorkerID
LEFT OUTER JOIN Операции O ON W.OperationID = O.OperationID;

--6
SELECT R.WorkerID, 0.OperationID
FROM Работники R CROSS JOIN  Операции O
WHERE R.WorkerID = O.OperationID;
