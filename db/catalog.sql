-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: MySQL-8.0
-- Время создания: Май 04 2025 г., 21:57
-- Версия сервера: 8.0.41
-- Версия PHP: 8.1.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `catalog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int NOT NULL,
  `parent_id` int DEFAULT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `menu_items`
--

INSERT INTO `menu_items` (`id`, `parent_id`, `name`) VALUES
(1, NULL, 'Каталог товаров'),
(2, 1, 'Мойки'),
(3, 2, 'Ulgran'),
(4, 3, 'Smth'),
(5, 3, 'Smth'),
(6, 2, 'Vigro Mramor'),
(7, 2, 'Handmade'),
(8, 7, 'Smth'),
(9, 7, 'Smth'),
(10, 2, 'Vigro Glass'),
(11, 1, 'Фильтры'),
(12, 11, 'Ulgran'),
(13, 12, 'Smth'),
(14, 12, 'Smth'),
(15, 11, 'Vigro Mramor');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `menu_items`
--
ALTER TABLE `menu_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
