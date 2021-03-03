-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2021 at 05:02 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeemanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `avatars`
--

CREATE TABLE `avatars` (
  `properties.skin` varchar(50) DEFAULT NULL,
  `properties.top` varchar(50) DEFAULT NULL,
  `properties.hairColor` varchar(50) DEFAULT NULL,
  `properties.hatColor` varchar(50) DEFAULT NULL,
  `properties.accessoriesColor` varchar(50) DEFAULT NULL,
  `properties.facialHair` varchar(50) DEFAULT NULL,
  `properties.facialHairColor` varchar(50) DEFAULT NULL,
  `properties.clothing` varchar(50) DEFAULT NULL,
  `properties.clothingGraphic` varchar(50) DEFAULT NULL,
  `properties.clothingColor` varchar(50) DEFAULT NULL,
  `properties.eyes` varchar(50) DEFAULT NULL,
  `properties.eyebrows` varchar(50) DEFAULT NULL,
  `properties.mouth` varchar(50) DEFAULT NULL,
  `properties.accessories` varchar(50) DEFAULT NULL,
  `employeeId` int(11) NOT NULL,
  `id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `avatars`
--

INSERT INTO `avatars` (`properties.skin`, `properties.top`, `properties.hairColor`, `properties.hatColor`, `properties.accessoriesColor`, `properties.facialHair`, `properties.facialHairColor`, `properties.clothing`, `properties.clothingGraphic`, `properties.clothingColor`, `properties.eyes`, `properties.eyebrows`, `properties.mouth`, `properties.accessories`, `employeeId`, `id`) VALUES
('tanned', 'frida', 'auburn', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'default', 'defaultNatural', 'default', NULL, 0, 329),
('pale', 'theCaesar', 'blonde', 'gray02', 'black', 'default', 'auburn', 'shirtScoopNeck', 'pizza', 'gray01', 'default', 'defaultNatural', 'twinkle', NULL, 1, 300),
('light', 'shortFlat', 'brownDark', 'pastelOrange', 'pastelGreen', 'beardLight', 'brownDark', 'shirtCrewNeck', 'deer', 'pastelOrange', 'default', 'default', 'smile', NULL, 2, 301),
('tanned', 'shaggyMullet', 'black', 'heather', 'black', 'default', 'black', 'shirtCrewNeck', 'pizza', 'black', 'default', 'default', 'default', NULL, 3, 302),
('pale', 'shortRound', 'black', 'blue01', 'pastelOrange', 'default', 'red', 'shirtCrewNeck', 'dumbia', 'pastelOrange', 'default', 'defaultNatural', 'twinkle', NULL, 4, 303),
('light', 'bob', 'blonde', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'pink', 'squint', 'default', 'default', NULL, 5, 304),
('light', 'longButNotTooLong', 'blondeGolden', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'default', 'defaultNatural', 'default', NULL, 6, 305),
('tanned', 'dreads01', 'brownDark', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'default', 'defaultNatural', 'twinkle', NULL, 7, 306),
('light', 'theCaesarAndSidePart', 'black', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'blue03', 'default', 'defaultNatural', 'default', 'prescription01', 8, 307),
('light', 'straight01', 'blonde', 'blue02', 'black', 'default', 'auburn', 'shirtScoopNeck', 'pizza', 'white', 'winkWacky', 'default', 'smile', NULL, 9, 308),
('light', 'longButNotTooLong', 'blonde', 'black', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'default', 'defaultNatural', 'default', 'round', 10, 309),
('tanned', 'theCaesarAndSidePart', 'auburn', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'squint', 'defaultNatural', 'default', NULL, 11, 310),
('darkBrown', 'shortCurly', 'black', 'black', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'heather', 'default', 'defaultNatural', 'twinkle', NULL, 12, 311),
('tanned', 'shortFlat', 'brownDark', 'blue02', 'black', 'default', 'auburn', 'graphicShirt', 'deer', 'red', 'default', 'defaultNatural', 'default', NULL, 13, 312),
('pale', 'straight02', 'black', 'black', 'black', 'default', 'auburn', 'shirtScoopNeck', 'pizza', 'heather', 'happy', 'default', 'default', 'prescription02', 14, 313),
('light', 'shortFlat', 'black', 'blue02', 'black', 'default', 'auburn', 'graphicShirt', 'diamond', 'pastelGreen', 'eyeRoll', 'defaultNatural', 'twinkle', NULL, 15, 314),
('brown', 'straightAndStrand', 'brownDark', 'blue02', 'black', 'default', 'auburn', 'overall', 'pizza', 'red', 'happy', 'defaultNatural', 'default', NULL, 16, 315),
('light', 'shaggy', 'black', 'pastelGreen', 'black', 'moustaceFancy', 'brownDark', 'graphicShirt', 'skrull', 'black', 'squint', 'raisedExcitedNatural', 'smile', NULL, 17, 316),
('light', 'curly', 'black', 'black', 'black', 'default', 'auburn', 'graphicShirt', 'hola', 'heather', 'default', 'defaultNatural', 'smile', NULL, 18, 317),
('light', 'dreads02', 'blonde', 'blue01', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'heather', 'default', 'defaultNatural', 'default', NULL, 19, 318),
('darkBrown', 'dreads01', 'black', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'blue03', 'default', 'default', 'default', NULL, 20, 319),
('light', 'shaggyMullet', 'brownDark', 'blue02', 'black', 'default', 'auburn', 'hoodie', 'pizza', 'black', 'default', 'raisedExcited', 'twinkle', NULL, 21, 320),
('light', 'shortFlat', 'black', 'blue02', 'black', 'default', 'auburn', 'hoodie', 'pizza', 'blue03', 'closed', 'default', 'smile', NULL, 22, 321),
('light', 'eyepatch', 'black', 'blue02', 'black', 'beardMedium', 'black', 'shirtCrewNeck', 'pizza', 'black', 'happy', 'raisedExcited', 'smile', NULL, 23, 322),
('light', 'shortFlat', 'auburn', 'blue02', 'black', 'default', 'auburn', 'hoodie', 'pizza', 'gray02', 'default', 'defaultNatural', 'default', NULL, 24, 323),
('light', 'dreads01', 'blonde', 'gray01', 'black', 'default', 'auburn', 'graphicShirt', 'dumbia', 'blue03', 'default', 'default', 'twinkle', NULL, 25, 324),
('light', 'shaggy', 'black', 'blue02', 'black', 'default', 'black', 'graphicShirt', 'pizza', 'red', 'default', 'raisedExcitedNatural', 'default', NULL, 26, 325),
('light', 'theCaesar', 'black', 'blue02', 'black', 'default', 'auburn', 'hoodie', 'pizza', 'red', 'squint', 'defaultNatural', 'default', 'prescription01', 27, 326),
('pale', 'bigHair', 'black', 'blue02', 'black', 'beardMedium', 'brown', 'collarAndSweater', 'pizza', 'black', 'default', 'defaultNatural', 'twinkle', 'prescription02', 28, 327),
('pale', 'longButNotTooLong', 'black', 'blue02', 'black', 'default', 'auburn', 'shirtCrewNeck', 'pizza', 'black', 'default', 'defaultNatural', 'default', NULL, 29, 328);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  `phoneNumber` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `lastName`, `role`, `email`, `gender`, `country`, `city`, `state`, `age`, `phoneNumber`) VALUES
(1, 'Pau', 'García', 'Tech Lead', 'pau@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(2, 'Alfredo', 'Rueda', 'Head Teacher', 'arueda@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(3, 'Cristian', 'Fondevilla', 'Co-founder & CEO', 'cristian@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(4, 'Daniel', 'Lucaci', 'Tech Lead', 'dani@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(5, 'Alinne', 'Shedid', 'Talent & Partnerships Manager', 'alinne@assemblerschool.com', 'female', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(6, 'Kasia', 'Adamowiczcr', 'Co-founder & COO', 'kasia@assemblerschool.com', 'female', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(7, 'Alfredo', 'Narváez', 'Tech Lead', 'a.narvaez@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(8, 'Manu', 'Sancho', 'Tech Lead', 'm.sancho@assemblerschool.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(9, 'Anna', 'Troyán', 'Student', 'ana.troyan@gmail.com', 'female', 'España', 'Alicante', 'Comunidad Valenciana', NULL, NULL),
(10, 'Verónica', 'Velázquez', 'Student', 'veronicavelazquezcalleja@gmail.com', 'female', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(11, 'Miguel', 'García', 'Student', 'miguelgc_95@hotmail.com', 'male', 'España', 'Sevilla', 'Andalucía', NULL, NULL),
(12, 'Yoguesh', 'Yadav', 'Student', 'aoyogesh78@yahoo.in', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(13, 'Enric', 'Miró', 'Student', 'cirnemiro@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(14, 'Irati', 'Arrieta', 'Student', 'irati.arrieta@hotmail.com', 'female', 'España', 'Irún', 'País Vasco', NULL, NULL),
(15, 'Luis', 'Blanco', 'Student', 'leyber.91.2@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(16, 'Cristina', 'Bulmes', 'Student', 'cristinabulnesmaya@gmail.com', 'female', 'España', 'Sevilla', 'Andalucía', NULL, NULL),
(17, 'Marcel', 'Arie', 'Student', 'googlillo@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(18, 'Ramón', 'Soler', 'Student', 'rsolerhernan@gmail.com', 'male', 'España', 'Valencia', 'Comunidad Valenciana', NULL, NULL),
(19, 'Froilán', 'Olesti', 'Student', 'frolesti_9@hotmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(20, 'Wilmer', 'Sierra', 'Student', 'wsierra010@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(21, 'Victor', 'Greco', 'Student', 'victorgreco263@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(22, 'Ignacio', 'Fernández', 'Student', 'ifernandezcerro@gmail.com', 'male', 'España', 'Madrid', 'Comunidad de Madrid', NULL, NULL),
(23, 'Raúl', 'Cátedra', 'Student', 'raulcabe3003@gmail.com', 'male', 'España', 'Monachil', 'Andalucía', NULL, NULL),
(24, 'Jan', 'Puig', 'Student', 'janpuigcapella@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(25, 'Andres', 'Auais', 'Student', 'andresauais@gmail.com', 'male', 'España', 'Tenerife', 'Islas Canarias', NULL, NULL),
(26, 'Fabrizio', 'Ervini', 'Student', 'Fabri.es018@gmail.com', 'male', 'España', 'Barcelona', 'Cataluña', NULL, NULL),
(27, 'Jose', 'Serrano', 'Student', 'joseramonsr3@hotmail.com', 'male', 'España', 'Málaga', 'Andalucía', NULL, NULL),
(28, 'Pablo', 'Caravaca', 'Student', 'pablocaravacacalvo.com', 'male', 'España', 'Sevilla', 'Andalucía', NULL, NULL),
(29, 'Estefanía', 'Cordero', 'Student', 'estefania.cbrion@gmail.com', 'female', 'España', 'La Coruña', 'Galicia', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `users` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`users`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avatars`
--
ALTER TABLE `avatars`
  ADD PRIMARY KEY (`employeeId`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
