USE UNIVER;

--1
-- Объявление
DECLARE @charVar CHAR(10) = 'Test', 
		@varcharVar VARCHAR(30) = 'Test String', 
		@datetimeVar DATETIME, 
		@timeVar TIME, 
		@intVar INT, 
		@smallintVar SMALLINT, 
		@tinyintVar TINYINT, 
		@numericVar NUMERIC(12, 5)

-- Присвоение произвольных значений 
SET @datetimeVar = GETDATE()
SET @timeVar = GETDATE()
SELECT @intVar = 123
SET @smallintVar = 12
SET @tinyintVar = 1
SET @numericVar = 12345.12345

-- Вывод значений (SELECT)
SELECT @charVar AS CharVar, 
	   @varcharVar AS VarcharVar, 
	   @datetimeVar AS DatetimeVar, 
	   @timeVar AS TimeVar

-- Вывод значений (PRINT)
PRINT 'IntVar: ' + CAST(@intVar AS VARCHAR)
PRINT 'SmallintVar: ' + CAST(@smallintVar AS VARCHAR)
PRINT 'TinyintVar: ' + CAST(@tinyintVar AS VARCHAR)
PRINT 'NumericVar: ' + CAST(@numericVar AS VARCHAR)

go

--2
DECLARE @totalCapacity INT, @avgCapacity FLOAT, @countLessAvg INT, @totalAuditoriums INT
SELECT @totalCapacity = SUM(AUDITORIUM_CAPACITY) FROM AUDITORIUM

IF @totalCapacity > 200
BEGIN
    SELECT @avgCapacity = AVG(AUDITORIUM_CAPACITY) FROM AUDITORIUM
    SELECT @countLessAvg = COUNT(*) FROM AUDITORIUM WHERE AUDITORIUM_CAPACITY < @avgCapacity
    SELECT @totalAuditoriums = COUNT(*) FROM AUDITORIUM
    SELECT @totalAuditoriums AS TotalAuditoriums, @avgCapacity AS AvgCapacity, @countLessAvg AS CountLessAvg, (@countLessAvg * 100.0 / @totalAuditoriums) AS PercentLessAvg
END
ELSE
BEGIN
    PRINT 'Общая вместимость аудиторий: ' + CAST(@totalCapacity AS VARCHAR)
END

go

--3
SELECT 
    @@ROWCOUNT AS 'Число обработанных строк', 
    @@VERSION AS 'Версия SQL Server', 
    @@SPID AS 'Системный идентификатор процесса', 
    @@ERROR AS 'Код последней ошибки', 
    @@SERVERNAME AS 'Имя сервера', 
    @@TRANCOUNT AS 'Уровень вложенности транзакции', 
    @@FETCH_STATUS AS 'Проверка результата считывания строк результирующего набора', 
    @@NESTLEVEL AS 'Уровень вложенности текущей процедуры'

go

--4
--a
DECLARE @t FLOAT, @x FLOAT, @z FLOAT

SET @t = 0.5 
SET @x = 1.0 

IF @t > @x
    SET @z = SQUARE(SIN(@t))
ELSE IF @t < @x
    SET @z = 4 * (@t + @x)
ELSE
    SET @z = 1 - EXP(@x - 2)

SELECT @z AS z

--b
SELECT NAME, DATEDIFF(YEAR, BDAY, GETDATE()) AS Age
FROM STUDENT
WHERE MONTH(BDAY) = MONTH(DATEADD(MONTH, 1, GETDATE()))

--с
SELECT DATEPART(WEEKDAY, PDATE) AS ExamDayOfWeek
FROM PROGRESS
WHERE SUBJECT = 'СУБД' AND IDSTUDENT IN (SELECT IDSTUDENT FROM STUDENT WHERE IDGROUP = 5)

go

--5
DECLARE @facultyName VARCHAR(50)
SET @facultyName = 'ИТ'

SELECT 
    STUDENT.NAME, 
    PROGRESS.NOTE, 
    CASE 
        WHEN PROGRESS.NOTE >= 9 THEN 'Отлично'
        WHEN PROGRESS.NOTE >= 7 THEN 'Хорошо'
        WHEN PROGRESS.NOTE >= 5 THEN 'Удовлетворительно'
        ELSE 'Неудовлетворительно'
    END AS Grade
FROM 
    STUDENT 
JOIN 
    PROGRESS ON STUDENT.IDSTUDENT = PROGRESS.IDSTUDENT
JOIN 
    GROUPS ON STUDENT.IDGROUP = GROUPS.IDGROUP
JOIN 
    PROFESSION ON GROUPS.PROFESSION = PROFESSION.PROFESSION
JOIN 
    FACULTY ON PROFESSION.FACULTY = FACULTY.FACULTY
WHERE 
    FACULTY.FACULTY = @facultyName
	
go

--6
CREATE TABLE #TempTable
(
    Column1 INT,
    Column2 INT,
    Column3 INT
)

DECLARE @i INT = 1
WHILE @i <= 10
BEGIN
    INSERT INTO #TempTable (Column1, Column2, Column3)
    VALUES (@i, @i * 10, @i * 100)

    SET @i = @i + 1
END

SELECT * FROM #TempTable

DROP TABLE #TempTable

go

--7
DECLARE @num INT
SET @num = 5 

IF @num < 0
BEGIN
    PRINT 'Введенное число отрицательное.'
    RETURN
END
PRINT 'Введенное число положительное.'

go

--8
BEGIN TRY
    DECLARE @x INT = 0
    SELECT 1 / @x
END TRY
BEGIN CATCH
    SELECT 
        ERROR_NUMBER() AS 'Код ошибки', 
        ERROR_MESSAGE() AS 'Сообщение об ошибке', 
        ERROR_LINE() AS 'Номер строки с ошибкой', 
        ISNULL(ERROR_PROCEDURE(), 'NULL') AS 'Имя процедуры', 
        ERROR_SEVERITY() AS 'Уровень серьезности ошибки', 
        ERROR_STATE() AS 'Метка ошибки'
END CATCH

go