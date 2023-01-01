-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: job-portal
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `no_of_department` int DEFAULT NULL,
  `description` longtext,
  `registeredNo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Amazon','http://localhost:8000/upload/logo_1672587751402amazon.jfif',10,'This is very top rated company','AWT-124-2','lahore','www.amazon.com','0512345233','amazon123@gmail.com','$2a$10$Ckg3.movB2g5zIAYbDyGFe4m3wgaVXHELObmy9N8vnui99/z6UxE6','2023-01-01 15:42:31','2023-01-01 15:42:31'),(2,'Google','http://localhost:8000/upload/logo_1672587977651google.jpg',23,'It is very best','WRTY-53-2','islamabad','www.google.com','0344543234','google@gmail.com','$2a$10$2aPRV1LSrhiD0MMznxNwo.6jtkOqbZXEVGnXe/jLpx4ANDcA6fieK','2023-01-01 15:46:17','2023-01-01 15:46:17'),(3,'facebook','http://localhost:8000/upload/logo_1672588139251fb.jfif',14,'It is very best','PRTQ-43-2','karachi','www.fb.com','0344543212','fb@gmail.com','$2a$10$B68dqvnCwxJpYjdNU2QRE.tuLE65hTr9kduhNKZA09gm4hJ3x1EKC','2023-01-01 15:48:59','2023-01-01 15:48:59'),(4,'Whatsapp','http://localhost:8000/upload/logo_1672588249029wa.jfif',13,'It is very best','TYPQ-89-2','pindi','www.wa.com','0344543244','wa@gmail.com','$2a$10$JR6Vi16GGLv24A1aBhb3h.u9Pd3lKpBqbFjwjytTIWzbWhj1i8KGu','2023-01-01 15:50:49','2023-01-01 15:50:49'),(5,'Instagram','http://localhost:8000/upload/logo_1672588370039ins.jfif',19,'It is very best','UIPA-56-2','lahore','www.insta.com','0344543674','insta@gmail.com','$2a$10$znCjPMxfuJja8XBy1TFcHeZ3huv4bhm.naEMqMKQU9K9wYj00HY1K','2023-01-01 15:52:50','2023-01-01 17:13:12');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02  0:05:06
