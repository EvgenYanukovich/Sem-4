USE UNIVER;

--1
go
CREATE or ALTER VIEW ������������� AS 
SELECT TEACHER AS ���, 
       TEACHER_NAME AS ���_�������������, 
       GENDER AS ���, 
       PULPIT AS ���_�������
FROM TEACHER;

--2
go
CREATE or ALTER VIEW ����������_������ AS
SELECT F.FACULTY AS ���������, COUNT(P.PULPIT) AS ����������_������
FROM FACULTY F
JOIN PULPIT P ON F.FACULTY = P.FACULTY
GROUP BY F.FACULTY;

--3
go
CREATE or ALTER VIEW ��������� AS
SELECT AUDITORIUM AS ���, 
       AUDITORIUM_NAME AS ������������_���������
FROM AUDITORIUM;

--4
go
CREATE or ALTER VIEW ����������_��������� AS
SELECT AUDITORIUM AS ���, 
       AUDITORIUM_NAME AS ������������_���������,
	   AUDITORIUM_TYPE AS ���_���������
FROM AUDITORIUM
WHERE AUDITORIUM_TYPE LIKE '��%' WITH CHECK OPTION;

--go
--INSERT ����������_��������� values('203-2', '203-2', '��');
--�������������� ������ ������, �.�. �� ������������� ������� �� with check option
--5
go
CREATE or ALTER VIEW ���������� AS
SELECT TOP 100 PERCENT SUBJECT AS ���, 
       SUBJECT_NAME AS ������������_����������, 
       PULPIT AS ���_�������
FROM SUBJECT
ORDER BY SUBJECT_NAME;

--6
go
CREATE OR ALTER VIEW ����������_������
WITH SCHEMABINDING
AS
SELECT F.FACULTY AS ���������, COUNT_BIG(*) AS ����������_������
FROM dbo.FACULTY F
JOIN dbo.PULPIT P ON F.FACULTY = P.FACULTY
GROUP BY F.FACULTY;

--����� ���� �������������
go
SELECT * FROM �������������
SELECT * FROM ����������_������
SELECT * FROM ���������
SELECT * FROM ����������_���������
SELECT * FROM ����������
