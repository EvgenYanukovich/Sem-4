USE UNIVER;

--1
go
CREATE or ALTER VIEW Преподаватель AS 
SELECT TEACHER AS код, 
       TEACHER_NAME AS имя_преподавателя, 
       GENDER AS пол, 
       PULPIT AS код_кафедры
FROM TEACHER;

--2
go
CREATE or ALTER VIEW Количество_кафедр AS
SELECT F.FACULTY AS факультет, COUNT(P.PULPIT) AS количество_кафедр
FROM FACULTY F
JOIN PULPIT P ON F.FACULTY = P.FACULTY
GROUP BY F.FACULTY;

--3
go
CREATE or ALTER VIEW Аудитории AS
SELECT AUDITORIUM AS код, 
       AUDITORIUM_NAME AS наименование_аудитории
FROM AUDITORIUM;

--4
go
CREATE or ALTER VIEW Лекционные_аудитории AS
SELECT AUDITORIUM AS код, 
       AUDITORIUM_NAME AS наименование_аудитории,
	   AUDITORIUM_TYPE AS тип_аудитории
FROM AUDITORIUM
WHERE AUDITORIUM_TYPE LIKE 'ЛК%' WITH CHECK OPTION;

--go
--INSERT Лекционные_аудитории values('203-2', '203-2', 'ЛЗ');
--Закомменченное выдаст ошибку, т.к. не соответствует условию из with check option
--5
go
CREATE or ALTER VIEW Дисциплины AS
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
