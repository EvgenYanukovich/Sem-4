/*1*/
select * From Заказы
Where Дата_поставки BETWEEN '2024-02-13' AND '2024-03-01';

/*2*/
select * From Товары
Where Цена BETWEEN '1' AND '120';

/*3*/
select Заказчик from Заказы
Where Наименование_товара like 'Карандаш'

/*4*/ 
select * from Заказы
Where Заказчик = 'МедЛек'
Order By Дата_поставки 