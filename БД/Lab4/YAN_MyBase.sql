USE YAN_MyBase;

--1
SELECT *
FROM ��������� R INNER JOIN �����������_������ W 
ON R.WorkerID = W.WorkerID

--2
SELECT *
FROM ��������� R INNER JOIN �����������_������ W 
ON R.WorkerID = W.WorkerID
WHERE R.WorkerID Like '1';

--3
SELECT 
    R.�������, 
    R.���, 
    O.������������,
    CASE 
        WHEN W.����������_������� BETWEEN 1 AND 100 THEN '������'
        WHEN W.����������_������� BETWEEN 101 AND 200 THEN '�������'
        WHEN W.����������_������� > 200 THEN '�������'
    END AS �������_������������������
FROM 
	��������� R
INNER JOIN �����������_������ W ON R.WorkerID = W.WorkerID
INNER JOIN �������� O ON W.OperationID = O.OperationID;

--4
SELECT 
    R.�������, 
    R.���, 
    O.������������,
    ISNULL(W.����������_�������, 0)
FROM 
    ��������� R
LEFT OUTER JOIN �����������_������ W ON R.WorkerID = W.WorkerID
LEFT OUTER JOIN �������� O ON W.OperationID = O.OperationID;

--6
SELECT R.WorkerID, 0.OperationID
FROM ��������� R CROSS JOIN  �������� O
WHERE R.WorkerID = O.OperationID;
