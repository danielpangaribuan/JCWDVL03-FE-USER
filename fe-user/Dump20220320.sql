-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: db_warehouse
-- ------------------------------------------------------
-- Server version	5.7.26

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provinsi` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank`
--

DROP TABLE IF EXISTS `bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bank_name` varchar(100) NOT NULL,
  `account_number` varchar(20) DEFAULT NULL,
  `account_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank`
--

LOCK TABLES `bank` WRITE;
/*!40000 ALTER TABLE `bank` DISABLE KEYS */;
INSERT INTO `bank` VALUES (3,'BCA','6621621','Daniel Parlindungan'),(4,'Mandiri','942832391','Tyo'),(5,'BRI','4231221212','Abraham');
/*!40000 ALTER TABLE `bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_price` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (0,9000000,0),(1,20000000,1),(2,5200000,2),(3,20000000,3),(4,1000000,3),(5,900000,17),(6,900000,17),(7,900000,17),(8,900000,17),(9,900000,17),(10,900000,17),(11,900000,17),(12,900000,17),(13,900000,17),(14,900000,17),(15,900000,17),(16,900000,17),(17,900000,17),(18,900000,1),(19,900000,1),(20,900000,1),(21,900000,1),(22,900000,1),(23,76442000,17),(24,76442000,17),(25,900000,1),(26,328000,17),(27,327000,17),(28,900000,1),(29,24010000,17),(30,44039000,17),(31,76039000,17),(32,76039000,17),(33,76010000,17),(34,76039000,17),(35,76039000,17),(36,3109000,17);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_detail`
--

DROP TABLE IF EXISTS `cart_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) DEFAULT NULL,
  `product_id` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_detail`
--

LOCK TABLES `cart_detail` WRITE;
/*!40000 ALTER TABLE `cart_detail` DISABLE KEYS */;
INSERT INTO `cart_detail` VALUES (1,0,'0',4),(2,0,'5',6),(3,0,'2',2),(4,1,'3',4),(5,1,'6',1),(6,2,'1',2),(7,2,'4',3),(8,3,'0',2),(9,3,'2',2),(10,3,'1',2),(11,4,'2',4),(12,4,'1',3),(13,15,'12',20),(14,16,'12',20),(15,17,'12',20),(16,18,'1',10),(17,18,'4',10),(18,18,'12',10),(19,19,'1',10),(20,19,'2',2),(21,20,'1',10),(22,20,'2',2),(23,21,'1',10),(24,21,'2',2),(25,22,'1',10),(26,22,'2',2),(27,23,'1',2),(28,23,'2',1),(29,23,'3',3),(30,24,'1',2),(31,24,'2',1),(32,24,'3',3),(33,25,'1',10),(34,25,'2',2),(35,26,'2',3),(36,27,'2',3),(37,28,'1',10),(38,28,'2',2),(39,29,'3',14),(40,30,'1',13),(41,30,'3',26),(42,31,'1',2),(43,31,'4',2),(44,32,'1',2),(45,32,'4',2),(46,33,'1',2),(47,33,'4',2),(48,34,'1',2),(49,34,'4',2),(50,35,'1',2),(51,35,'4',2),(52,36,'2',14),(53,36,'7',14),(54,36,'8',7),(55,36,'15',14);
/*!40000 ALTER TABLE `cart_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Laki - Laki'),(2,'Perempuan'),(3,'Olahraga');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cost`
--

DROP TABLE IF EXISTS `cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cost_detail_id` int(11) DEFAULT NULL,
  `description` longtext,
  `price` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cost`
--

LOCK TABLES `cost` WRITE;
/*!40000 ALTER TABLE `cost` DISABLE KEYS */;
INSERT INTO `cost` VALUES (1,1,NULL,'1000000','2022-01-22 00:00:00',NULL),(2,2,NULL,'1000000','2022-01-22 00:00:00',NULL),(3,3,NULL,'12000000','2022-01-22 00:00:00',NULL),(4,1,NULL,'1000000','2022-01-22 00:00:00',NULL),(5,3,NULL,'29200','2022-01-22 00:00:00',NULL);
/*!40000 ALTER TABLE `cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cost_detail`
--

DROP TABLE IF EXISTS `cost_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cost_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cost_detail`
--

LOCK TABLES `cost_detail` WRITE;
/*!40000 ALTER TABLE `cost_detail` DISABLE KEYS */;
INSERT INTO `cost_detail` VALUES (1,'Marketing'),(2,'Transportation'),(3,'Sales');
/*!40000 ALTER TABLE `cost_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `warehouse_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (1,8,-3,1),(2,1,8,1),(3,2,0,1),(4,3,5,1),(5,4,4,1),(6,5,2,1),(7,6,12,1),(8,7,-6,1),(9,8,4,2),(10,1,10,2),(11,2,-9,2),(12,3,4,2),(13,4,14,2),(14,5,5,2),(15,6,0,2),(16,7,0,2),(17,8,0,3),(18,1,0,3),(19,2,0,3),(20,3,0,3),(21,4,0,3),(22,5,0,3),(23,6,0,3),(24,7,0,3),(25,15,-10,1),(26,16,4,1),(27,17,4,1),(28,18,4,1),(29,19,4,1),(30,20,4,1),(31,21,4,1),(32,22,4,1),(33,23,4,1),(34,24,4,1),(35,25,4,1),(36,26,4,1),(37,27,4,1),(38,28,4,1),(39,29,4,1),(40,30,4,1),(41,31,4,1),(42,32,4,1),(43,33,4,1),(44,34,4,1),(45,35,4,1),(46,36,4,1),(47,37,4,1),(48,38,4,1),(49,39,4,1),(50,15,4,2),(51,16,4,2),(52,17,4,2),(53,18,4,2),(54,19,4,2),(55,20,4,2),(56,21,4,2),(57,22,4,2),(58,23,4,2),(59,24,4,2),(60,25,4,2),(61,26,4,2),(62,27,4,2),(63,28,4,2),(64,29,4,2),(65,30,4,2),(66,31,4,2),(67,32,4,2),(68,33,4,2),(69,34,4,2),(70,35,4,2),(71,36,4,2),(72,37,4,2),(73,38,4,2),(74,39,4,2),(75,15,4,3),(76,16,4,3),(77,17,4,3),(78,18,4,3),(79,19,4,3),(80,20,4,3),(81,21,4,3),(82,22,4,3),(83,23,4,3),(84,24,4,3),(85,25,4,3),(86,26,4,3),(87,27,4,3),(88,28,4,3),(89,29,4,3),(90,30,4,3),(91,31,4,3),(92,32,4,3),(93,33,4,3),(94,34,4,3),(95,35,4,3),(96,36,4,3),(97,37,4,3),(98,38,4,3),(99,39,4,3);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otp_history`
--

DROP TABLE IF EXISTS `otp_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otp_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `OTP` varchar(45) NOT NULL,
  `created at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otp_history`
--

LOCK TABLES `otp_history` WRITE;
/*!40000 ALTER TABLE `otp_history` DISABLE KEYS */;
INSERT INTO `otp_history` VALUES (1,'uppq13','2022-03-20 16:30:29');
/*!40000 ALTER TABLE `otp_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `category_id` int(11) NOT NULL,
  `weight` int(11) DEFAULT NULL,
  `description` longtext,
  `price` int(11) DEFAULT NULL,
  `capital_price` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Opium (Grey)',1,1,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',20000000,15800000,NULL,NULL),(2,'Kenneth Cole',2,1,'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.',92000,80000,NULL,NULL),(3,'Farenheit Oval',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n',12000000,11000000,NULL,NULL),(4,'Farenheit (Grey)',1,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',18000000,16000000,NULL,NULL),(5,'Aislin Wayfarer',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n',24000000,21800000,NULL,NULL),(6,'Azmani Round',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n',1800000,1480000,NULL,NULL),(7,'Farenheit Wayfararer',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n',120000,92000,NULL,NULL),(8,'Fosiil Wayfararer',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n\n',900000,750000,NULL,NULL),(15,'Fastrack Aviator',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',875000,725000,NULL,NULL),(16,'MARTIN Aviator',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(17,'Royal Son Aviator',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1225000,1125000,NULL,NULL),(18,'Irayz Butterfly',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(19,'Jerry Rectangular',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1925000,1725000,NULL,NULL),(20,'Herdy Wayfarer',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',2225000,2025000,NULL,NULL),(21,'Herdy Wayfarer',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1000000,825000,NULL,NULL),(22,'Herdy Wayfarer RED',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1000000,825000,NULL,NULL),(23,'MARTIN Aviator RED',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(24,'Royal Son Aviator RED',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1225000,1125000,NULL,NULL),(25,'Irayz Butterfly RED',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(26,'Jerry Rectangular RED',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1925000,1725000,NULL,NULL),(27,'Herdy Wayfarer RED',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',2225000,2025000,NULL,NULL),(28,'MARTIN Aviator BLUE',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(29,'Royal Son Aviator BLUE',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1225000,1125000,NULL,NULL),(30,'Irayz Butterfly BLUE',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(31,'Jerry Rectangular BLUE',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1925000,1725000,NULL,NULL),(32,'Herdy Wayfarer BLUE',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',2225000,2025000,NULL,NULL),(33,'Herdy Wayfarer BLUE',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1000000,825000,NULL,NULL),(34,'MARTIN Aviator GREEN',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(35,'Royal Son Aviator GREEN',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1225000,1125000,NULL,NULL),(36,'Irayz Butterfly GREEN',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',925000,825000,NULL,NULL),(37,'Jerry Rectangular GREEN',2,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1925000,1725000,NULL,NULL),(38,'Herdy Wayfarer GREEN',1,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',2225000,2025000,NULL,NULL),(39,'Herdy Wayfarer GREEN',3,1,'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).  ',1000000,825000,NULL,NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `image` varchar(300) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (1,8,'s1.jpg',1),(2,1,'s2.jpg',1),(3,2,'s3.jpg',1),(4,3,'s4.jpg',1),(5,4,'m1.jpg',1),(6,5,'m2.jpg',1),(7,6,'m3.jpg',1),(8,7,'m4.jpg',1),(9,0,'s1.jpg',2),(10,1,'s2.jpg',2),(11,2,'s1.jpg',2),(12,3,'s1.jpg',2),(13,4,'s1.jpg',2),(14,5,'s1.jpg',2),(15,6,'s1.jpg',2),(40,7,'s1.jpg',2),(49,8,'m2.jpg',2),(50,1,'m2.jpg',2),(51,2,'m2.jpg',2),(52,3,'m2.jpg',2),(53,4,'m2.jpg',2),(54,5,'m2.jpg',2),(55,6,'m2.jpg',2),(56,7,'m2.jpg',2),(57,15,'s4.jpg',1),(58,16,'s4.jpg',1),(59,16,'s4.jpg',1),(60,16,'s4.jpg',1),(61,16,'s4.jpg',1),(62,16,'s4.jpg',1),(63,16,'s4.jpg',1),(64,17,'s4.jpg',1),(65,18,'s4.jpg',1),(66,19,'s4.jpg',1),(67,20,'s4.jpg',1),(68,21,'s4.jpg',1),(69,22,'s4.jpg',1),(70,23,'s4.jpg',1),(71,24,'s4.jpg',1),(72,25,'s4.jpg',1),(73,26,'s4.jpg',1),(74,27,'s4.jpg',1),(75,28,'s4.jpg',1),(76,29,'s4.jpg',1),(77,30,'s4.jpg',1),(78,31,'s4.jpg',1),(79,32,'s4.jpg',1),(80,33,'s4.jpg',1),(81,34,'s4.jpg',1),(82,35,'s4.jpg',1),(83,36,'s4.jpg',1),(84,37,'s4.jpg',1),(85,38,'s4.jpg',1),(86,39,'s4.jpg',1);
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Member'),(2,'Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(300) DEFAULT NULL,
  `cart_id` int(11) NOT NULL,
  `user_address_id` int(11) NOT NULL,
  `total_price` int(11) DEFAULT NULL,
  `delivery_fee` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `receipt_transfer` varchar(300) DEFAULT NULL,
  `bank_id` int(11) NOT NULL,
  `date_transfer` datetime DEFAULT NULL,
  `total_transfer` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (0,'NO121212',0,0,9000000,NULL,6,NULL,0,'2022-12-23 00:00:00',9000000,'2022-01-22 00:00:00','2022-03-13 13:55:54'),(1,'NO389212',1,1,46000000,NULL,7,NULL,1,'2022-12-23 00:00:00',46000000,'2022-02-23 00:00:00',NULL),(2,'NO312322',2,2,5200000,NULL,7,NULL,1,NULL,5200000,'2021-12-28 00:00:00','2022-02-28 23:27:36'),(3,'NO431312',3,3,5200000,NULL,7,NULL,1,NULL,5200000,'2022-03-12 00:00:00',NULL),(4,'NO439812',4,4,46000000,NULL,7,NULL,1,NULL,46000000,'2021-11-28 00:00:00',NULL),(5,'NO423812',5,5,2200000,NULL,7,NULL,1,NULL,2200000,'2021-11-28 00:00:00',NULL),(9,'INV202203190',22,1,900000,29000,2,'s2.jpg',1,'2022-03-29 00:00:00',NULL,'2022-03-19 02:15:05','2022-03-19 02:15:05'),(10,'INV202203191',23,8,76442000,350000,10,'buffdoge.png',4,'2022-03-20 00:00:00',NULL,'2022-03-19 14:30:57','2022-03-20 15:38:15'),(11,'INV202203192',24,8,76442000,350000,2,'buffdoge.png',4,'2022-03-20 00:00:00',NULL,'2022-03-19 14:30:57','2022-03-19 14:30:57'),(12,'INV202203193',25,1,900000,29000,1,NULL,1,NULL,NULL,'2022-03-19 14:30:57','2022-03-19 14:30:57'),(13,'INV202203194',26,9,328000,52000,2,NULL,3,NULL,NULL,'2022-03-19 14:30:57','2022-03-20 11:41:07'),(14,'INV202203195',27,10,327000,51000,2,NULL,5,NULL,NULL,'2022-03-19 17:58:48','2022-03-20 11:41:00'),(15,'INV202203200',28,1,900000,29000,1,NULL,1,NULL,NULL,'2022-03-20 00:51:39','2022-03-20 00:51:39'),(16,'INV202203201',34,15,76039000,39000,10,NULL,3,NULL,NULL,'2022-03-20 11:55:21','2022-03-20 15:38:26'),(17,'INV202203202',35,15,76039000,39000,10,NULL,5,NULL,NULL,'2022-03-20 11:55:21','2022-03-20 15:58:36'),(18,'INV202203203',36,16,3109000,35000,2,'buffdoge.png',3,'2022-03-20 00:00:00',NULL,'2022-03-20 19:52:56','2022-03-20 21:33:42');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_detail`
--

DROP TABLE IF EXISTS `transaction_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `warehouse_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_detail`
--

LOCK TABLES `transaction_detail` WRITE;
/*!40000 ALTER TABLE `transaction_detail` DISABLE KEYS */;
INSERT INTO `transaction_detail` VALUES (1,6,12,1,10),(2,6,12,2,10),(3,7,12,1,10),(4,7,4,2,10),(5,7,1,2,10),(6,8,1,1,2),(7,8,1,2,8),(8,8,2,2,2),(9,9,1,1,2),(10,9,1,2,8),(11,9,2,2,2),(12,10,2,1,1),(13,10,3,1,3),(14,10,1,1,1),(15,10,1,2,1),(16,11,2,1,1),(17,11,3,1,3),(18,11,1,1,1),(19,11,1,2,1),(20,12,1,1,2),(21,12,1,2,8),(22,12,2,2,2),(23,13,2,2,3),(24,14,2,2,3),(25,15,1,1,2),(26,15,1,2,8),(27,15,2,2,2),(28,16,4,1,2),(29,16,1,1,2),(30,17,4,1,2),(31,17,1,1,2),(32,18,2,2,2),(33,18,8,1,1),(34,18,15,1,2),(35,18,7,1,2),(36,18,2,2,2),(37,18,8,1,1),(38,18,15,1,2),(39,18,7,1,2),(40,18,2,2,2),(41,18,8,1,1),(42,18,15,1,2),(43,18,7,1,2),(44,18,2,2,2),(45,18,8,1,1),(46,18,15,1,2),(47,18,7,1,2),(48,18,2,2,2),(49,18,8,1,1),(50,18,15,1,2),(51,18,7,1,2),(52,18,2,2,2),(53,18,8,1,1),(54,18,15,1,2),(55,18,7,1,2),(56,18,2,2,2),(57,18,8,1,1),(58,18,15,1,2),(59,18,7,1,2);
/*!40000 ALTER TABLE `transaction_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_status`
--

DROP TABLE IF EXISTS `transaction_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_status`
--

LOCK TABLES `transaction_status` WRITE;
/*!40000 ALTER TABLE `transaction_status` DISABLE KEYS */;
INSERT INTO `transaction_status` VALUES (1,'MENUNGGU PEMABAYARAN'),(2,'PENGECEKAN PEMBAYARAN'),(3,'PEMBAYARAN DITERIMA'),(4,'BARANG DIPROSES'),(5,'BARANG SEDANG DIKIRIM'),(6,'BARANG SAMPAI TUJUAN'),(7,'BARANG DITERIMA'),(8,'TRANSAKSI SELESAI'),(9,'PEMBELI MENGAJUKAN PEMBATALAN'),(10,'TRANSAKSI DIBATALKAN');
/*!40000 ALTER TABLE `transaction_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `password` longtext NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `verified_status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (0,NULL,'daniel','daniels','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(1,NULL,'jose','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,NULL,NULL),(2,NULL,'edytha','daniel','Edytha Olivia','edyta@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(3,NULL,'elisabeth','jose','Elisabeth Pangaribuan','elisabeth@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(4,NULL,'johan','daniel','Johan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(5,NULL,'fsas','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(6,NULL,'s','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(7,NULL,'danielf','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(8,NULL,'josem','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(9,NULL,'daniele','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(10,NULL,'josen','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(11,NULL,'danielt','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(12,NULL,'josex','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(13,NULL,'daniely','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(14,NULL,'joseq','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(15,NULL,'danielp','daniel','Daniel Parlindungan','dpangaribuan40@gmail.com',1,'Laki-laki','1996-11-13',1,'2022-12-22 00:00:00',NULL),(16,NULL,'josea','jose','Jose','jose@gmail.com',1,'Laki-laki','1998-02-23',1,'2022-12-22 00:00:00',NULL),(17,'96a7be1','user41','$2b$10$HphkUQ3SmhMIysXy5/RJHOi4z4piXmFo0FGD2PEioTljlso2/Uruu','user 41','user41@gmail.com',NULL,'Laki - laki','1997-08-06',NULL,NULL,NULL),(18,'a7b5bc1','user42','$2b$10$9feUDXUO1OsoVe0uisZqfegXg497.QS0bSI1LG5eJQFmQ09SHqiDS','user 41','user42@gmail.com',NULL,'Laki - laki','1997-08-06',NULL,NULL,NULL),(19,'39911ea','user43','$2b$10$H2DGZhV3tTzWvv6rKrmpEOO2w1Dc6QEpwRRlCw6v1/uB2L/QnknqK','user 41','user43@gmail.com',NULL,'Laki - laki','1997-08-06',NULL,NULL,NULL),(20,'a53514e','budiman','$2b$10$nKVIJi9nB58PEwHTaYXzJ.8B/NvLliKapYD.g5GnfYRSbglol5Nea','Budiman Samudra','totexi9654@sofrge.com',NULL,'Perempuan','1997-08-06',NULL,NULL,NULL),(21,'b568feb','daniel','$2b$10$rfchgvByqYgog07ycDX.XOeBGck6FL9xCU323uucg8az4zdGNIVpS','daniel parlindungan','dparlindungan40@gmail.com',NULL,'Laki - laki','1997-08-06',NULL,NULL,NULL),(22,'2abfd62','daniel1396','$2b$10$uuwlLEJIgSlnKojaejtcVO8rHdykSn1K9bFePA0RKbJE/VUz.z6q2','Daniel Parlindungan','dparlindungan40@gmail.com',NULL,'Laki - laki','1997-08-06',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `full_address` varchar(255) DEFAULT NULL,
  `landmark` varchar(100) DEFAULT NULL,
  `province` varchar(45) DEFAULT NULL,
  `province_id` int(11) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `postal_code` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES (2,1,'Daniel Parlindungan','081283009993','Jl Madrasah','Apartement','DKI Jakarta',21,'Jakarta Timur',45,'123342','2022-01-22 00:00:00','2022-01-22 00:00:00'),(3,1,'Daniel Parlindungan','081283009993','Jl Madrasah','Apartement','DKI Jakarta',21,'Jakarta Timur',45,'123342','2022-01-22 00:00:00','2022-01-22 00:00:00'),(4,1,'Daniel Parlindungan','081283009993','Jl Madrasah','Apartement','DKI Jakarta',21,'Jakarta Timur',45,'123342','2022-01-22 00:00:00','2022-01-22 00:00:00'),(5,1,'Daniel Parlindungan','081283009993','Jl Madrasah','Apartement','DKI Jakarta',21,'Jakarta Timur',45,'123342','2022-01-22 00:00:00','2022-01-22 00:00:00'),(6,1,'Daniel Parlindungan','081283009993','Jl Madrasah','Apartement','DKI Jakarta',21,'Jakarta Timur',45,'123342','2022-01-22 00:00:00','2022-01-22 00:00:00'),(7,17,'Daniel','08128390912','Jl Madrasah','Apartement','DI Yogyakarta',5,'Kulon Progo',210,'13440','2022-01-22 00:00:00','2022-01-22 00:00:00'),(8,17,'Daniel','08128390912','Jl Madrasah','Apartement','DI Yogyakarta',5,'Kulon Progo',210,'13440','2022-01-22 00:00:00','2022-01-22 00:00:00'),(9,17,'Daniel','912','Jl Madrasah','Apartement','Kalimantan Timur',15,'Balikpapan',19,'1234','2022-01-22 00:00:00','2022-01-22 00:00:00'),(10,17,'Daniel','912','Jl Madrasah','Apartement','Bangka Belitung',2,'Bangka',27,'13440','2022-01-22 00:00:00','2022-01-22 00:00:00'),(11,17,'Daniel Parlindungan','081283009993','Jl MAdrasah','Apart','Bangka Belitung',2,'Bangka',27,'122112','2022-01-22 00:00:00','2022-01-22 00:00:00'),(12,17,'Daniel Parlindungan','081283009993','Jl MAdrasah','Apart','Bangka Belitung',2,'Bangka',27,'122112','2022-01-22 00:00:00','2022-01-22 00:00:00'),(13,17,'Daniel Parlindungan','081283009993','Jl MAdrasah','Apart','Bangka Belitung',2,'Bangka',27,'122112','2022-01-22 00:00:00','2022-01-22 00:00:00'),(14,17,'Mark Marquez','12131424142','Jl MAdrasah','Apart','Banten',3,'Cilegon',106,'2134','2022-01-22 00:00:00','2022-01-22 00:00:00'),(15,17,'Mark Marquez','081283009993','Jl MAdrasah','Apart','Bangka Belitung',2,'Bangka',27,'13440','2022-01-22 00:00:00','2022-01-22 00:00:00'),(16,17,'Mark Marquez','081283009993','Jl MAdrasah','Asd','DKI Jakarta',6,'Jakarta Timur',154,'13440','2022-01-22 00:00:00','2022-01-22 00:00:00');
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_register`
--

DROP TABLE IF EXISTS `user_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT '2',
  `verified` varchar(45) NOT NULL DEFAULT '0',
  `fullname` varchar(200) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_register`
--

LOCK TABLES `user_register` WRITE;
/*!40000 ALTER TABLE `user_register` DISABLE KEYS */;
INSERT INTO `user_register` VALUES (1,'df56178','bagoestyo','bagoes.tyo@gmail.com','ellia06081997','2','0',NULL,NULL),(2,'e099d0d','bagoestyo','bagoes.tyo@gmail.com','$2b$10$u06B0W.fUZFDe6UFN6HWbeZ77n5t.mG97NC5YAY62oz0pe2wFg2cG','2','0',NULL,NULL),(3,'3573c8a','bagoestyo','bagoes.tyo@gmail.com','$2b$10$kgLeH.oZm.vCrmkHCKSlDetHtMQTUusjMLRPZUbL71o7Y5lQ.fD8W','2','0','Ellia Bagoes Setyo','1997-08-06'),(4,'573c8a2','bagoestyo','bagoes.tyo@gmail.com','$2b$10$EbMK1apCtpqZJz.TQ7QKMeIGjg/xXTFoqXxKnQt6J1HWr6tZGwf4m','2','0','Ellia Bagoes Setyo','1997-08-06');
/*!40000 ALTER TABLE `user_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouse`
--

DROP TABLE IF EXISTS `warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warehouse_name` varchar(100) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `province_id` int(11) DEFAULT NULL,
  `province_name` varchar(45) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `city_name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouse`
--

LOCK TABLES `warehouse` WRITE;
/*!40000 ALTER TABLE `warehouse` DISABLE KEYS */;
INSERT INTO `warehouse` VALUES (1,'Warehouse Jakarta','Full Address',6,'DKI Jakarta',155,'Jakarta Utara',NULL,NULL),(2,'Warehouse Bekasi','Full Address',8,'Jambi',50,'Batang Hari',NULL,NULL),(3,'Warehouse Unknown','Full Address',20,NULL,49,'Unknown',NULL,NULL);
/*!40000 ALTER TABLE `warehouse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-20 21:44:45
