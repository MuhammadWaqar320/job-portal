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
-- Table structure for table `applicationforjobs`
--

DROP TABLE IF EXISTS `applicationforjobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicationforjobs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `expectedSalary` varchar(255) DEFAULT NULL,
  `jobSeekerId` int DEFAULT NULL,
  `jobId` int DEFAULT NULL,
  `cv` varchar(255) DEFAULT NULL,
  `specialization` varchar(255) DEFAULT NULL,
  `comment` longtext,
  `dob` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `postcode` varchar(255) DEFAULT NULL,
  `cnic` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobSeekerId` (`jobSeekerId`),
  KEY `jobId` (`jobId`),
  CONSTRAINT `applicationforjobs_ibfk_1` FOREIGN KEY (`jobSeekerId`) REFERENCES `users` (`id`),
  CONSTRAINT `applicationforjobs_ibfk_2` FOREIGN KEY (`jobId`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicationforjobs`
--

LOCK TABLES `applicationforjobs` WRITE;
/*!40000 ALTER TABLE `applicationforjobs` DISABLE KEYS */;
INSERT INTO `applicationforjobs` VALUES (1,'islamabad','bscs','2years','2lac',1,1,'http://localhost:8000/upload/cv_1672593769542resume.pdf','database','I am expert in this field','2014-06-10','male','12223-3','82432-2317364-1','2023-01-01 17:22:49','2023-01-01 17:22:49'),(2,'pindi','bsse','1year','300lac',2,2,'http://localhost:8000/upload/cv_1672593927684resume.pdf','machine learning','I am expert in this field','2023-01-12','female','23445-1','823201-43316438-2','2023-01-01 17:25:27','2023-01-01 17:25:27'),(3,'islamabad','bsce','3years','2lac',3,3,'http://localhost:8000/upload/cv_1672594068066resume.pdf','sqa','I am expert in this field','2016-06-15','male','34534-0','823201-43316438-3','2023-01-01 17:27:48','2023-01-01 17:27:48'),(4,'lahore','bssc','1year','2lac',4,4,'http://localhost:8000/upload/cv_1672594156914resume.pdf','Human resource','I am expert in this field','2023-01-01','male','23423-5','823201-43316438-4','2023-01-01 17:29:16','2023-01-01 17:29:16'),(5,'lahore','bssc','1year','2lac',5,6,'http://localhost:8000/upload/cv_1672594372357resume.pdf','Human resource','I am expert in this field','2023-01-01','male','23423-6','823201-43316438-4','2023-01-01 17:32:52','2023-01-01 17:32:52'),(6,'islamabad','bscs','2years','1lac',2,7,'http://localhost:8000/upload/cv_1672595194374resume.pdf','bscs','I am expert in this field','2023-01-01','male','23423-9','823201-43316438-2','2023-01-01 17:46:34','2023-01-01 17:46:34'),(7,'islamabad','bscs','2years','1lac',6,12,'http://localhost:8000/upload/cv_1672595298717resume.pdf','bscs','I am expert in this field','2023-01-01','male','23423-2','823201-43316438-2','2023-01-01 17:48:18','2023-01-01 17:48:18'),(8,'islamabad','bscs','2years','1lac',3,4,'http://localhost:8000/upload/cv_1672595429069resume.pdf','bscs','I am expert in this field','2023-01-01','male','23423-7','823201-43316438-2','2023-01-01 17:50:29','2023-01-01 17:50:29'),(9,'pindi','bscs','2years','2lac',7,3,'http://localhost:8000/upload/cv_1672595518513Letter.docx','mscs','I am expert in this field','2008-07-04','male','23423-8','823201-43316438-2','2023-01-01 17:51:58','2023-01-01 17:51:58'),(55,'islamabad','bscs','2years','2lac',12,3,'http://localhost:8000/upload/cv_1672599109145resume.pdf','bscs','I am expert','2023-01-26','male','23423-3','823201-43316438-2','2023-01-01 18:51:49','2023-01-01 18:51:49'),(56,'islamabad','bscs','2years','2lac',12,3,'http://localhost:8000/upload/cv_1672599183375resume.pdf','bscs','I am expert','2023-01-26','male','23423-3','823201-43316438-2','2023-01-01 18:53:03','2023-01-01 18:53:03');
/*!40000 ALTER TABLE `applicationforjobs` ENABLE KEYS */;
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
