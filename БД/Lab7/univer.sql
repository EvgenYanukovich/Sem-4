USE UNIVER;

--1
go
CREATE VIEW Преподаватель AS 
SELECT TEACHER AS код, 
       TEACHER_NAME AS имя_преподавателя, 
       GENDER AS пол, 
       PULPIT AS код_кафедры
FROM TEACHER;

--2
go
CREATE VIEW Количество_кафедр AS
SELECT F.FACULTY AS факультет, COUNT(P.PULPIT) AS количество_кафедр
FROM FACULTY F
JOIN PULPIT P ON F.FACULTY = P.FACULTY
GROUP BY F.FACULTY;

--3
go
CREATE VIEW Аудитории AS
SELECT AUDITORIUM AS код, 
       AUDITORIUM_NAME AS наименование_аудитории
FROM AUDITORIUM
WHERE AUDITORIUM_TYPE LIKE 'ЛК%';

--4
go
CREATE VIEW Лекционные_аудитории AS
SELECT AUDITORIUM AS код, 
       AUDITORIUM_NAME AS наименование_аудитории
FROM AUDITORIUM
WHERE AUDITORIUM_TYPE LIKE 'ЛК%';

--5
go
CREATE VIEW Дисциплины AS
SELECT TOP 100 PERCENT SUBJECT AS код, 
       SUBJECT_NAME AS наименование_дисциплины, 
       PULPIT AS код_кафедры
FROM SUBJECT
ORDER BY SUBJECT_NAME;

--6
go
CREATE OR ALTER VIEW Количество_кафедр
WITH SCHEMABINDING
AS
SELECT F.FACULTY AS факультет, COUNT_BIG(*) AS количество_кафедр
FROM dbo.FACULTY F
JOIN dbo.PULPIT P ON F.FACULTY = P.FACULTY
GROUP BY F.FACULTY;

--Вызов всех представлений
go
SELECT * FROM Преподаватель
SELECT * FROM Количество_кафедр
SELECT * FROM Аудитории
SELECT * FROM Лекционные_аудитории
SELECT * FROM Дисциплины
