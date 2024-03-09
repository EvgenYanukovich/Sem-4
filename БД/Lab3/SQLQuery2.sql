USE master;

CREATE database YAN_MyBase on primary
(name = 'YAN_MyBase_mdf', filename = 'D:\Education\������� 4\��\Lab3\YAN_MyBase_mdf.mdf',
size = 10240Kb,maxsize=UNLIMITED, filegrowth=1024Kb),
( name = 'YAN_MyBase_ndf', filename = 'D:\Education\������� 4\��\Lab3\YAN_MyBase_ndf.ndf', 
   size = 10240KB, maxsize=1Gb, filegrowth=25%),
filegroup FG
( name = 'YAN_MyBase_fg1_1', filename = 'D:\Education\������� 4\��\Lab3\YAN_MyBase_fg1_1.ndf', 
   size = 10240Kb, maxsize=1Gb, filegrowth=25%),
( name = 'YAN_MyBase_fg1_2', filename = 'D:\Education\������� 4\��\Lab3\YAN_MyBase_fg1_2.ndf', 
   size = 10240Kb, maxsize=1Gb, filegrowth=25%)
log on
( name = 'YAN_MyBase_log', filename='D:\Education\������� 4\��\Lab3\YAN_MyBase_log.ldf',       
   size=10240Kb,  maxsize=2048Gb, filegrowth=10%)

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
