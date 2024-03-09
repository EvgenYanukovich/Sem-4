/*1*/
select * From Заказы
Where Дата_поставки BETWEEN '2024-02-13' AND '2024-03-01';

/*2*/
select * From Товары
Where Цена BETWEEN '10' AND '20';

/*3*/
select Заказчик from Заказы
Where Наименование_товара like 'Бумага'

/*4*/
select * from Заказы
Where Заказчик = 'БГУ'
Order By Дата_поставки 