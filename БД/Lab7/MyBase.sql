USE YAN_MyBase;

--1
go
CREATE or ALTER VIEW �������� AS 
SELECT WorkerID AS ���, 
       �������, 
       ���, 
       ��������,
       �����,
       �������,
       ����
FROM ���������;

--2
go
CREATE or ALTER VIEW ����������_����� AS
SELECT WorkerID AS ��������, COUNT(OperationID) AS ����������_�����
FROM �����������_������
GROUP BY WorkerID;

--3
go
CREATE or ALTER VIEW �������_�������� AS
SELECT OperationID AS ���, 
       ������������
FROM ��������
WHERE �������_��������� LIKE '�������%';

--4
go
CREATE or ALTER VIEW �������_�������� AS
SELECT OperationID AS ���, 
       ������������
FROM ��������
WHERE �������_��������� LIKE '�������%';

--5
go
CREATE or ALTER VIEW ��������_��_�������� AS
SELECT TOP 100 PERCENT OperationID AS ���, 
       ������������, 
       �������_���������
FROM ��������
ORDER BY ������������;

--6
go
CREATE OR ALTER VIEW ����������_�����
WITH SCHEMABINDING
AS
SELECT WorkerID AS ��������, COUNT_BIG(*) AS ����������_�����
FROM dbo.�����������_������
GROUP BY WorkerID;

go
SELECT * FROM ��������;
SELECT * FROM ����������_�����;
SELECT * FROM �������_��������;
SELECT * FROM �������_��������;
SELECT * FROM ��������_��_��������;
SELECT * FROM ����������_�����;