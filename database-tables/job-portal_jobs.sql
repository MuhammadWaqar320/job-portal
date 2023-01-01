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
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `description` longtext,
  `type` varchar(255) DEFAULT NULL,
  `companyId` int DEFAULT NULL,
  `lastDate` date DEFAULT NULL,
  `salary` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `noOfVecancies` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companyId` (`companyId`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'software engineer','http://localhost:8000/upload/picture_1672589103004se.jfif','islamabad','software','We are hiring software engineer with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',1,'2023-01-26','2lac','level-4','2 years',10,'2023-01-01 16:05:03','2023-01-01 16:05:03'),(2,'machine learning engineer','http://localhost:8000/upload/picture_1672589424801ml.jfif','islamabad','ML engineer','We are hiring machine learning engineer with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',1,'2023-02-04','2lac','level-3','2 years',3,'2023-01-01 16:10:24','2023-01-01 16:10:24'),(3,'SQA engineer','http://localhost:8000/upload/picture_1672589545588sq.jfif','lahore','software','We are hiring SQA engineer with over 1+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',1,'2023-02-04','2lac','level-4','1 years',5,'2023-01-01 16:12:25','2023-01-01 16:12:25'),(4,'Accountant','http://localhost:8000/upload/picture_1672589929088ac.jfif','islamabad','finance','We are hiring accountant with over 1+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','contract',3,'2023-02-11','300000','manager','2 years',6,'2023-01-01 16:18:49','2023-01-01 16:18:49'),(5,'Human Resource','http://localhost:8000/upload/picture_16725900296855.jfif','islamabad','Human resource','We are hiring HR with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','contract',3,'2023-02-11','300000','manager','2 years',4,'2023-01-01 16:20:29','2023-01-01 16:20:29'),(6,'Nodejs developer','http://localhost:8000/upload/picture_1672590469669se.jfif','pindi','software engineer','This is very best job opportunity.We are hiring HR with over 2+ year of experience. If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin.','contract',3,'2023-02-11','233333','level-5','2 years ',10,'2023-01-01 16:27:49','2023-01-01 16:27:49'),(7,'MERN developer','http://localhost:8000/upload/picture_1672590566469ml.jfif','pindi','software engineer','This is very best job opportunity.We are hiring mern stack developer with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','contract',3,'2023-02-11','233333','level-5','2 years ',10,'2023-01-01 16:29:26','2023-01-01 16:29:26'),(8,'MEAN developer','http://localhost:8000/upload/picture_1672590596730ac.jfif','pindi','software engineer','This is very best job opportunity.We are hiring mern stack developer with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','contract',3,'2023-02-11','233333','level-5','3 years ',10,'2023-01-01 16:29:56','2023-01-01 16:29:56'),(9,'Java developer','http://localhost:8000/upload/picture_16725908591155.jfif','islamabad','software engineer','We are hiring java with over 2+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',5,'2023-02-11','3000000','developer','2+ years',34,'2023-01-01 16:34:19','2023-01-01 16:34:19'),(10,'mobile app developer','http://localhost:8000/upload/picture_1672590951707l1.jfif','islamabad','software engineer','We are hiring java with over 1+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',5,'2023-02-11','3000000','developer','1+ years',34,'2023-01-01 16:35:51','2023-01-01 16:35:51'),(11,'reactjs developer','http://localhost:8000/upload/picture_1672590992147l2.webp','islamabad','software engineer','We are hiring reactjs with over 3+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',5,'2023-02-11','3000000','developer','3+ years',34,'2023-01-01 16:36:32','2023-01-01 16:36:32'),(12,'angular developer','http://localhost:8000/upload/picture_1672591011606l4.jpg','islamabad','software engineer','We are hiring reactjs with over 3+ year of experience.  If you are looking for a professional environment and attractive benefits, don\'t hesitate to contact me via Linkedin. We require highly passionate and experienced resources for this position, Interested Candidates can apply at career@alazeemservices.net','permanent',5,'2023-02-11','3000000','developer','3+ years',34,'2023-01-01 16:36:51','2023-01-01 16:36:51');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
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
