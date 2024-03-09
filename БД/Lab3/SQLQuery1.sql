

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

CREATE TABLE ��������� (
    WorkerID INT PRIMARY KEY,
    ������� NVARCHAR(50),
    ��� NVARCHAR(50),
    �������� NVARCHAR(50),
    ����� NVARCHAR(100),
    ������� NVARCHAR(15),
    ���� INT
);

CREATE TABLE �������� (
    OperationID INT PRIMARY KEY,
    ������������ NVARCHAR(100),
    �������_��������� NVARCHAR(50)
);

CREATE TABLE �����������_������ (
    WorkID INT PRIMARY KEY,
    WorkerID INT FOREIGN KEY REFERENCES ���������(WorkerID),
    OperationID INT FOREIGN KEY REFERENCES ��������(OperationID),
    ����������_������� INT,
    ���� DATE
);

ALTER TABLE ��������� ADD ������� INT;
ALTER TABLE ��������� DROP COLUMN �������;

INSERT INTO ��������� (WorkerID, �������, ���, ��������, �����, �������, ����)
VALUES 
(1, '������', '����', '��������', '��. ������, 1', '+375291111111', 10),
(2, '������', '����', '��������', '��. ���������, 2', '+375292222222', 15),
(3, '�������', '�����', '���������', '��. �������, 3', '+375293333333', 20),
(4, '��������', '�������', '����������', '��. ��������, 4', '+375294444444', 25),
(5, '��������', '�������', '����������', '��. �����������, 5', '+375295555555', 30);

INSERT INTO �������� (OperationID, ������������, �������_���������)
VALUES 
(1, '�������� 1', '�������'),
(2, '�������� 2', '�������'),
(3, '�������� 3', '�������'),
(4, '�������� 4', '�������'),
(5, '�������� 5', '�������');

INSERT INTO �����������_������ (WorkID, WorkerID, OperationID, ����������_�������, ����)
VALUES 
(1, 1, 1, 100, '2024-02-20'),
(2, 2, 2, 200, '2024-02-19'),
(3, 3, 3, 300, '2024-02-18'),
(4, 4, 4, 400, '2024-02-17'),
(5, 5, 5, 500, '2024-02-16');

SELECT * FROM ���������;
SELECT �������, ��� FROM ���������;
SELECT COUNT(*) FROM ���������;
UPDATE ��������� SET ������� = '�������' WHERE WorkerID = 1;
SELECT * FROM ���������;
