Use UNIVER;

--1
DECLARE @subject_list varchar(MAX)
DECLARE @subject_name varchar(100)

-- Определение курсора
DECLARE subject_cursor CURSOR FOR 
SELECT SUBJECT_NAME
FROM SUBJECT
WHERE PULPIT = 'ИСиТ'

OPEN subject_cursor
	SET @subject_list = ''
	FETCH NEXT FROM subject_cursor INTO @subject_name
	WHILE @@FETCH_STATUS = 0
	BEGIN
		SET @subject_list = @subject_list + RTRIM(@subject_name) + ', '
		FETCH NEXT FROM subject_cursor INTO @subject_name
	END
	print @subject_list;
CLOSE subject_cursor
DEALLOCATE subject_cursor


--2
--Глобальный
BEGIN
    DECLARE GLOBAL_CURSOR CURSOR GLOBAL FOR 
    SELECT SUBJECT_NAME
    FROM SUBJECT
    WHERE PULPIT = 'ИСиТ'
    OPEN GLOBAL_CURSOR
END
GO

BEGIN
    DECLARE @subject_name varchar(100)
    FETCH NEXT FROM GLOBAL_CURSOR INTO @subject_name
    WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT @subject_name
        FETCH NEXT FROM GLOBAL_CURSOR INTO @subject_name
    END
    CLOSE GLOBAL_CURSOR
    DEALLOCATE GLOBAL_CURSOR
END
GO

--Локальный
BEGIN
    DECLARE LOCAL_CURSOR CURSOR LOCAL FOR 
    SELECT SUBJECT_NAME
    FROM SUBJECT
    WHERE PULPIT = 'ИСиТ'
    OPEN LOCAL_CURSOR
END
GO
BEGIN
    DECLARE @subject_name varchar(100)
    FETCH NEXT FROM LOCAL_CURSOR INTO @subject_name 
    WHILE @@FETCH_STATUS = 0
    BEGIN
        PRINT @subject_name
        FETCH NEXT FROM LOCAL_CURSOR INTO @subject_name
    END
    CLOSE LOCAL_CURSOR
    DEALLOCATE LOCAL_CURSOR
END
GO

--3
-- Создание статического курсора
DECLARE @subject_name varchar(100)
DECLARE static_cursor CURSOR STATIC FOR 
SELECT SUBJECT_NAME
FROM SUBJECT
WHERE PULPIT = 'ИСиТ'

OPEN static_cursor
	UPDATE SUBJECT
	SET SUBJECT_NAME = 'Название2'
	WHERE PULPIT = 'ИСиТ' AND SUBJECT_NAME = @subject_name
	FETCH NEXT FROM static_cursor INTO @subject_name
	WHILE @@FETCH_STATUS = 0
	BEGIN
		PRINT @subject_name
		FETCH NEXT FROM static_cursor INTO @subject_name
	END
CLOSE static_cursor
DEALLOCATE static_cursor

-- Создание динамического курсора
DECLARE dynamic_cursor CURSOR DYNAMIC FOR 
SELECT SUBJECT_NAME
FROM SUBJECT
WHERE PULPIT = 'ИСиТ'

OPEN dynamic_cursor
	UPDATE SUBJECT
	SET SUBJECT_NAME = 'Название3'
	WHERE PULPIT = 'ИСиТ' AND SUBJECT_NAME = @subject_name
	FETCH NEXT FROM dynamic_cursor INTO @subject_name
	WHILE @@FETCH_STATUS = 0
	BEGIN
		PRINT @subject_name
		FETCH NEXT FROM dynamic_cursor INTO @subject_name
	END
CLOSE dynamic_cursor
DEALLOCATE dynamic_cursor

GO

--4
-- Объявление курсора с атрибутом SCROLL
DECLARE scroll_cursor CURSOR SCROLL FOR 
SELECT SUBJECT_NAME
FROM SUBJECT
WHERE PULPIT = 'ИСиТ'

OPEN scroll_cursor
	DECLARE @subject_name varchar(100)

	FETCH FIRST FROM scroll_cursor INTO @subject_name
	PRINT 'FIRST: ' + @subject_name

	FETCH LAST FROM scroll_cursor INTO @subject_name
	PRINT 'LAST: ' + @subject_name

	FETCH ABSOLUTE 3 FROM scroll_cursor INTO @subject_name
	PRINT 'ABSOLUTE 3: ' + @subject_name

	FETCH RELATIVE -1 FROM scroll_cursor INTO @subject_name
	PRINT 'RELATIVE -1: ' + @subject_name
CLOSE scroll_cursor
DEALLOCATE scroll_cursor

GO

--5
DECLARE @subject_name varchar(100)
DECLARE cur CURSOR FOR 
	SELECT SUBJECT_NAME
		FROM SUBJECT
		WHERE PULPIT = 'ИСиТ'
	FOR UPDATE OF SUBJECT_NAME

OPEN cur
	FETCH NEXT FROM cur INTO @subject_name
	UPDATE SUBJECT
	SET SUBJECT_NAME = 'Новое_название'
	WHERE CURRENT OF cur

	FETCH NEXT FROM cur INTO @subject_name
	DELETE FROM SUBJECT
	WHERE CURRENT OF cur
CLOSE cur
DEALLOCATE cur

--6
GO
DECLARE @studentID int, @grade int;
DECLARE StudCursor CURSOR LOCAL STATIC
FOR
SELECT PROGRESS.IDSTUDENT, PROGRESS.NOTE FROM PROGRESS JOIN STUDENT ON STUDENT.IDSTUDENT = PROGRESS.IDSTUDENT
	JOIN GROUPS ON STUDENT.IDGROUP = GROUPS.IDGROUP
	WHERE PROGRESS.NOTE < 4;

OPEN StudCursor;
FETCH StudCursor into @studentID, @grade;
WHILE @@FETCH_STATUS = 0
BEGIN
	--delete from progress
	--where IDSTUDENT = @STUDENTID and NOTE = @grade;
	print @studentID + ' ' + @grade;
	FETCH StudCursor into @studentId, @grade;
END;
CLOSE StudCursor;
DEALLOCATE StudCursor;

GO

DECLARE @id_student INT = 1001

DECLARE cur CURSOR FOR 
SELECT NOTE
FROM PROGRESS
WHERE IDSTUDENT = @id_student
FOR UPDATE OF NOTE

OPEN cur

FETCH NEXT FROM cur

WHILE @@FETCH_STATUS = 0
BEGIN
    UPDATE PROGRESS
    SET NOTE = NOTE + 1
    WHERE CURRENT OF cur

END

CLOSE cur
DEALLOCATE cur