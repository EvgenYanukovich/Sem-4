USE YAN_MyBase

--1
SELECT *
FROM ���������
WHERE WorkerID IN (
    SELECT WorkerID
    FROM �����������_������
    WHERE ����������_������� > 100
) AND ������� LIKE '%��%';

--2
SELECT �.*
FROM ��������� �
INNER JOIN (
    SELECT WorkerID
    FROM �����������_������
    WHERE ����������_������� > 100
) �� ON �.WorkerID = ��.WorkerID
WHERE �.������� LIKE '%��%';

--3
SELECT TOP 5 WITH TIES �.�������, �.���, �.��������, SUM(��.����������_�������) as ����������������������
FROM ��������� �
INNER JOIN �����������_������ �� ON �.WorkerID = ��.WorkerID
GROUP BY �.WorkerID, �.�������, �.���, �.��������
ORDER BY ���������������������� DESC;

--4
SELECT �.*
FROM ��������� �
WHERE EXISTS (
    SELECT 1
    FROM �����������_������ ��
    WHERE ��.WorkerID = �.WorkerID AND ��.����������_������� > 100
);

--5
SELECT 
    (SELECT AVG(����) FROM ���������) as �����������,
    (SELECT AVG(����������_�������) FROM �����������_������) as ������������������������,
    (SELECT AVG(OperationID) FROM ��������) as �������ID��������

--6
SELECT �.�������, �.���, �.��������
FROM ��������� �
WHERE �.���� > ALL (
    SELECT AVG(��.����������_������� / 50)
    FROM �����������_������ ��
    GROUP BY ��.WorkerID
);

--7
SELECT �.�������, �.���, �.��������
FROM ��������� �
WHERE �.���� > ANY (
    SELECT AVG(��.����������_������� / 50)
    FROM �����������_������ ��
    GROUP BY ��.WorkerID
);
