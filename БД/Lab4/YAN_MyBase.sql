USE YAN_MyBase;

--5
SELECT *
FROM ��������� R
FULL OUTER JOIN �����������_������ W ON R.WorkerID = W.WorkerID
WHERE W.WorkerID IS NULL;

SELECT *
FROM ��������� R
FULL OUTER JOIN �����������_������ W ON R.WorkerID = W.WorkerID
WHERE R.WorkerID IS NULL;

SELECT *
FROM ��������� R
FULL OUTER JOIN �����������_������ W ON R.WorkerID = W.WorkerID;

--6
SELECT R.WorkerID, AT.AUDITORIUM_TYPENAME
FROM ��������� R
CROSS JOIN AUDITORIUM_TYPE AT
WHERE R.WorkerID = AT.AUDITORIUM_TYPE;
