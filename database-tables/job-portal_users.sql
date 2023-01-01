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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ihsan','ihsan123@gmail.com','$2a$10$6ThFV8.5/LYR1nckCukCf.yfqHW96n6aJGixR6ivzb3NgVymJQ1je','islamabad','03124532430','seeker','2023-01-01 15:30:29','2023-01-01 15:30:29'),(2,'admin','admin123@gmail.com','$2a$10$0UZr65ZOE6p8dlbivD5y1.adGMOKHyKg7CH1aF6xBL66IJXVH0tti','islamabad','03445653220','admin','2023-01-01 15:32:20','2023-01-01 17:17:42'),(3,'asif','asif123@gmail.com','$2a$10$Nq99nB.cm8hn5dz6KYKEquqyPuTds2oAODYuOue2eV6g7tM1GpWDm','lahore','03445323564','seeker','2023-01-01 15:36:05','2023-01-01 15:36:05'),(4,'ali','ali123@gmail.com','$2a$10$Bz8tO.8RzVYM76euGJ/zg.NZ.QbDuuV2daO0uX2EAeI5xjY904JEa','islamabad','03445653220','seeker','2023-01-01 16:50:21','2023-01-01 16:50:21'),(5,'ahmad','ahmad123@gmail.com','$2a$10$LlHOxNbx8VmHiLxIKS8hneel50Kzmk08ioWABpwBUZfu0mImDGmPi','islamabad','03445653220','seeker','2023-01-01 16:51:20','2023-01-01 16:51:20'),(6,'zahid','zahid123@gmail.com','$2a$10$NxOSb8e/k5dT4Z.qKnEwDef8qH/gPs8VAhSl8fqEW2WPVTPQCEY6G','islamabad','03445653220','seeker','2023-01-01 16:51:31','2023-01-01 16:51:31'),(7,'yasir','yasir123@gmail.com','$2a$10$k6yOMLyN8luW.OV5DVFKKurDkccCr3mvFu4F4PEb928pjkEdxyCzK','lahore','03445653220','seeker','2023-01-01 16:51:53','2023-01-01 16:51:53'),(8,'kashir','kashif123@gmail.com','$2a$10$OCxSUBvoF3fSsvssq7GGTuNNcNh7Ek5M.3lLSKkemSrDSyEeuOce.','lahore','03445653220','seeker','2023-01-01 16:52:09','2023-01-01 16:52:09'),(9,'sohail','sohail123@gmail.com','$2a$10$pJNngFW2WBQFu4REKVPt4eN18hYvZZbBGBA1XZfhZHzb6OOFA02y2','lahore','03445653220','seeker','2023-01-01 16:52:30','2023-01-01 16:52:30'),(10,'ahsan','ahsanl123@gmail.com','$2a$10$JE9lunvlSd8Vgg9Vs9CV8OFtl5.fzhb0A6O1T190HtPZdHCGntTIu','lahore','03445653220','seeker','2023-01-01 16:52:46','2023-01-01 16:52:46'),(11,'raheel','raheell123@gmail.com','$2a$10$Q2/cMg7nsniO5r/vrB414.OmtOcWz4RGXOigiVWTJYO1k5A9ajgX.','lahore','03445653220','seeker','2023-01-01 16:53:00','2023-01-01 16:53:00'),(12,'asim','asim123@gmail.com','$2a$10$1ib8r62Oot4c6Wwi43i59eMsNtETXkFprMRLHVgUvjhoWxfoMI3qi','lahore','03445653220','seeker','2023-01-01 17:14:53','2023-01-01 17:14:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
