-- -- MariaDB dump 10.19  Distrib 10.6.4-MariaDB, for Win64 (AMD64)
-- --
-- -- Host: localhost    Database: studyboard_db
-- -- ------------------------------------------------------
-- -- Server version	10.6.4-MariaDB

-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!40101 SET NAMES utf8mb4 */;
-- /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
-- /*!40103 SET TIME_ZONE='+00:00' */;
-- /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
-- /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
-- /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- --
-- -- Table structure for table `account_emailaddress`
-- --

-- DROP TABLE IF EXISTS `account_emailaddress`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `account_emailaddress` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `email` varchar(254) COLLATE utf8mb3_bin NOT NULL,
--   `verified` tinyint(1) NOT NULL,
--   `primary` tinyint(1) NOT NULL,
--   `user_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `email` (`email`),
--   KEY `account_emailaddress_user_id_2c513194_fk_auth_user_id` (`user_id`),
--   CONSTRAINT `account_emailaddress_user_id_2c513194_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `account_emailaddress`
-- --

-- LOCK TABLES `account_emailaddress` WRITE;
-- /*!40000 ALTER TABLE `account_emailaddress` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `account_emailaddress` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `account_emailconfirmation`
-- --

-- DROP TABLE IF EXISTS `account_emailconfirmation`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `account_emailconfirmation` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `created` datetime(6) NOT NULL,
--   `sent` datetime(6) DEFAULT NULL,
--   `key` varchar(64) COLLATE utf8mb3_bin NOT NULL,
--   `email_address_id` bigint(20) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `key` (`key`),
--   KEY `account_emailconfirmation_email_address_id_5b7f8c58_fk` (`email_address_id`),
--   CONSTRAINT `account_emailconfirmation_email_address_id_5b7f8c58_fk` FOREIGN KEY (`email_address_id`) REFERENCES `account_emailaddress` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `account_emailconfirmation`
-- --

-- LOCK TABLES `account_emailconfirmation` WRITE;
-- /*!40000 ALTER TABLE `account_emailconfirmation` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `account_emailconfirmation` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_group`
-- --

-- DROP TABLE IF EXISTS `auth_group`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_group` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `name` varchar(150) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `name` (`name`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_group`
-- --

-- LOCK TABLES `auth_group` WRITE;
-- /*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_group_permissions`
-- --

-- DROP TABLE IF EXISTS `auth_group_permissions`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_group_permissions` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `group_id` int(11) NOT NULL,
--   `permission_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
--   KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
--   CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
--   CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_group_permissions`
-- --

-- LOCK TABLES `auth_group_permissions` WRITE;
-- /*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_permission`
-- --

-- DROP TABLE IF EXISTS `auth_permission`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_permission` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) COLLATE utf8mb3_bin NOT NULL,
--   `content_type_id` int(11) NOT NULL,
--   `codename` varchar(100) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
--   CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_permission`
-- --

-- LOCK TABLES `auth_permission` WRITE;
-- /*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
-- INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add site',7,'add_site'),(26,'Can change site',7,'change_site'),(27,'Can delete site',7,'delete_site'),(28,'Can view site',7,'view_site'),(29,'Can add post',8,'add_post'),(30,'Can change post',8,'change_post'),(31,'Can delete post',8,'delete_post'),(32,'Can view post',8,'view_post'),(33,'Can add reply',9,'add_reply'),(34,'Can change reply',9,'change_reply'),(35,'Can delete reply',9,'delete_reply'),(36,'Can view reply',9,'view_reply'),(37,'Can add tag',10,'add_tag'),(38,'Can change tag',10,'change_tag'),(39,'Can delete tag',10,'delete_tag'),(40,'Can view tag',10,'view_tag'),(41,'Can add user',11,'add_user'),(42,'Can change user',11,'change_user'),(43,'Can delete user',11,'delete_user'),(44,'Can view user',11,'view_user'),(45,'Can add blacklisted user',12,'add_blacklisteduser'),(46,'Can change blacklisted user',12,'change_blacklisteduser'),(47,'Can delete blacklisted user',12,'delete_blacklisteduser'),(48,'Can view blacklisted user',12,'view_blacklisteduser'),(49,'Can add search history',13,'add_searchhistory'),(50,'Can change search history',13,'change_searchhistory'),(51,'Can delete search history',13,'delete_searchhistory'),(52,'Can view search history',13,'view_searchhistory'),(53,'Can add reply report',14,'add_replyreport'),(54,'Can change reply report',14,'change_replyreport'),(55,'Can delete reply report',14,'delete_replyreport'),(56,'Can view reply report',14,'view_replyreport'),(57,'Can add post report',15,'add_postreport'),(58,'Can change post report',15,'change_postreport'),(59,'Can delete post report',15,'delete_postreport'),(60,'Can view post report',15,'view_postreport'),(61,'Can add post image',16,'add_postimage'),(62,'Can change post image',16,'change_postimage'),(63,'Can delete post image',16,'delete_postimage'),(64,'Can view post image',16,'view_postimage'),(65,'Can add notification',17,'add_notification'),(66,'Can change notification',17,'change_notification'),(67,'Can delete notification',17,'delete_notification'),(68,'Can view notification',17,'view_notification'),(69,'Can add user tag',18,'add_usertag'),(70,'Can change user tag',18,'change_usertag'),(71,'Can delete user tag',18,'delete_usertag'),(72,'Can view user tag',18,'view_usertag'),(73,'Can add user reply like',19,'add_userreplylike'),(74,'Can change user reply like',19,'change_userreplylike'),(75,'Can delete user reply like',19,'delete_userreplylike'),(76,'Can view user reply like',19,'view_userreplylike'),(77,'Can add user post like',20,'add_userpostlike'),(78,'Can change user post like',20,'change_userpostlike'),(79,'Can delete user post like',20,'delete_userpostlike'),(80,'Can view user post like',20,'view_userpostlike'),(81,'Can add reply to reply',21,'add_replytoreply'),(82,'Can change reply to reply',21,'change_replytoreply'),(83,'Can delete reply to reply',21,'delete_replytoreply'),(84,'Can view reply to reply',21,'view_replytoreply'),(85,'Can add reply to post',22,'add_replytopost'),(86,'Can change reply to post',22,'change_replytopost'),(87,'Can delete reply to post',22,'delete_replytopost'),(88,'Can view reply to post',22,'view_replytopost'),(89,'Can add post tag',23,'add_posttag'),(90,'Can change post tag',23,'change_posttag'),(91,'Can delete post tag',23,'delete_posttag'),(92,'Can view post tag',23,'view_posttag'),(93,'Can add favourite question',24,'add_favouritequestion'),(94,'Can change favourite question',24,'change_favouritequestion'),(95,'Can delete favourite question',24,'delete_favouritequestion'),(96,'Can view favourite question',24,'view_favouritequestion'),(97,'Can add email address',25,'add_emailaddress'),(98,'Can change email address',25,'change_emailaddress'),(99,'Can delete email address',25,'delete_emailaddress'),(100,'Can view email address',25,'view_emailaddress'),(101,'Can add email confirmation',26,'add_emailconfirmation'),(102,'Can change email confirmation',26,'change_emailconfirmation'),(103,'Can delete email confirmation',26,'delete_emailconfirmation'),(104,'Can view email confirmation',26,'view_emailconfirmation'),(105,'Can add social account',27,'add_socialaccount'),(106,'Can change social account',27,'change_socialaccount'),(107,'Can delete social account',27,'delete_socialaccount'),(108,'Can view social account',27,'view_socialaccount'),(109,'Can add social application',28,'add_socialapp'),(110,'Can change social application',28,'change_socialapp'),(111,'Can delete social application',28,'delete_socialapp'),(112,'Can view social application',28,'view_socialapp'),(113,'Can add social application token',29,'add_socialtoken'),(114,'Can change social application token',29,'change_socialtoken'),(115,'Can delete social application token',29,'delete_socialtoken'),(116,'Can view social application token',29,'view_socialtoken');
-- /*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_user`
-- --

-- DROP TABLE IF EXISTS `auth_user`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_user` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `password` varchar(128) COLLATE utf8mb3_bin NOT NULL,
--   `last_login` datetime(6) DEFAULT NULL,
--   `is_superuser` tinyint(1) NOT NULL,
--   `username` varchar(150) COLLATE utf8mb3_bin NOT NULL,
--   `first_name` varchar(150) COLLATE utf8mb3_bin NOT NULL,
--   `last_name` varchar(150) COLLATE utf8mb3_bin NOT NULL,
--   `email` varchar(254) COLLATE utf8mb3_bin NOT NULL,
--   `is_staff` tinyint(1) NOT NULL,
--   `is_active` tinyint(1) NOT NULL,
--   `date_joined` datetime(6) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `username` (`username`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_user`
-- --

-- LOCK TABLES `auth_user` WRITE;
-- /*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_user_groups`
-- --

-- DROP TABLE IF EXISTS `auth_user_groups`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_user_groups` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `user_id` int(11) NOT NULL,
--   `group_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
--   KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
--   CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
--   CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_user_groups`
-- --

-- LOCK TABLES `auth_user_groups` WRITE;
-- /*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `auth_user_user_permissions`
-- --

-- DROP TABLE IF EXISTS `auth_user_user_permissions`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `auth_user_user_permissions` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `user_id` int(11) NOT NULL,
--   `permission_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
--   KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
--   CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
--   CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `auth_user_user_permissions`
-- --

-- LOCK TABLES `auth_user_user_permissions` WRITE;
-- /*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `blacklisted_user`
-- --

-- DROP TABLE IF EXISTS `blacklisted_user`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `blacklisted_user` (
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`user_id_id`),
--   CONSTRAINT `blacklisted_user_user_id_id_fd9108c0_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `blacklisted_user`
-- --

-- LOCK TABLES `blacklisted_user` WRITE;
-- /*!40000 ALTER TABLE `blacklisted_user` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `blacklisted_user` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `django_admin_log`
-- --

-- DROP TABLE IF EXISTS `django_admin_log`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `django_admin_log` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `action_time` datetime(6) NOT NULL,
--   `object_id` longtext COLLATE utf8mb3_bin DEFAULT NULL,
--   `object_repr` varchar(200) COLLATE utf8mb3_bin NOT NULL,
--   `action_flag` smallint(5) unsigned NOT NULL CHECK (`action_flag` >= 0),
--   `change_message` longtext COLLATE utf8mb3_bin NOT NULL,
--   `content_type_id` int(11) DEFAULT NULL,
--   `user_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
--   KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
--   CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
--   CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `django_admin_log`
-- --

-- LOCK TABLES `django_admin_log` WRITE;
-- /*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `django_content_type`
-- --

-- DROP TABLE IF EXISTS `django_content_type`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `django_content_type` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `app_label` varchar(100) COLLATE utf8mb3_bin NOT NULL,
--   `model` varchar(100) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `django_content_type`
-- --

-- LOCK TABLES `django_content_type` WRITE;
-- /*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
-- INSERT INTO `django_content_type` VALUES (25,'account','emailaddress'),(26,'account','emailconfirmation'),(1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(12,'pageapp','blacklisteduser'),(24,'pageapp','favouritequestion'),(17,'pageapp','notification'),(8,'pageapp','post'),(16,'pageapp','postimage'),(15,'pageapp','postreport'),(23,'pageapp','posttag'),(9,'pageapp','reply'),(14,'pageapp','replyreport'),(22,'pageapp','replytopost'),(21,'pageapp','replytoreply'),(13,'pageapp','searchhistory'),(10,'pageapp','tag'),(11,'pageapp','user'),(20,'pageapp','userpostlike'),(19,'pageapp','userreplylike'),(18,'pageapp','usertag'),(6,'sessions','session'),(7,'sites','site'),(27,'socialaccount','socialaccount'),(28,'socialaccount','socialapp'),(29,'socialaccount','socialtoken');
-- /*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `django_migrations`
-- --

-- DROP TABLE IF EXISTS `django_migrations`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `django_migrations` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `app` varchar(255) COLLATE utf8mb3_bin NOT NULL,
--   `name` varchar(255) COLLATE utf8mb3_bin NOT NULL,
--   `applied` datetime(6) NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `django_migrations`
-- --

-- LOCK TABLES `django_migrations` WRITE;
-- /*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
-- INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-10-26 04:00:01.103723'),(2,'auth','0001_initial','2021-10-26 04:00:01.513817'),(3,'account','0001_initial','2021-10-26 04:00:01.605837'),(4,'account','0002_email_max_length','2021-10-26 04:00:01.639845'),(5,'account','0003_auto_20211026_1207','2021-10-26 04:00:01.788878'),(6,'admin','0001_initial','2021-10-26 04:00:01.865895'),(7,'admin','0002_logentry_remove_auto_add','2021-10-26 04:00:01.872897'),(8,'admin','0003_logentry_add_action_flag_choices','2021-10-26 04:00:01.878899'),(9,'contenttypes','0002_remove_content_type_name','2021-10-26 04:00:01.928910'),(10,'auth','0002_alter_permission_name_max_length','2021-10-26 04:00:01.962918'),(11,'auth','0003_alter_user_email_max_length','2021-10-26 04:00:01.995926'),(12,'auth','0004_alter_user_username_opts','2021-10-26 04:00:02.001927'),(13,'auth','0005_alter_user_last_login_null','2021-10-26 04:00:02.033934'),(14,'auth','0006_require_contenttypes_0002','2021-10-26 04:00:02.036934'),(15,'auth','0007_alter_validators_add_error_messages','2021-10-26 04:00:02.042936'),(16,'auth','0008_alter_user_username_max_length','2021-10-26 04:00:02.064942'),(17,'auth','0009_alter_user_last_name_max_length','2021-10-26 04:00:02.086947'),(18,'auth','0010_alter_group_name_max_length','2021-10-26 04:00:02.127955'),(19,'auth','0011_update_proxy_permissions','2021-10-26 04:00:02.134957'),(20,'auth','0012_alter_user_first_name_max_length','2021-10-26 04:00:02.156961'),(21,'pageapp','0001_initial','2021-10-26 04:00:03.271214'),(22,'sessions','0001_initial','2021-10-26 04:00:03.327227'),(23,'sites','0001_initial','2021-10-26 04:00:03.346231'),(24,'sites','0002_alter_domain_unique','2021-10-26 04:00:03.369236'),(25,'socialaccount','0001_initial','2021-10-26 04:00:03.653300'),(26,'socialaccount','0002_token_max_lengths','2021-10-26 04:00:03.714315'),(27,'socialaccount','0003_extra_data_default_dict','2021-10-26 04:00:03.723316'),(28,'socialaccount','0004_auto_20211026_1207','2021-10-26 04:00:04.038388');
-- /*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `django_session`
-- --

-- DROP TABLE IF EXISTS `django_session`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `django_session` (
--   `session_key` varchar(40) COLLATE utf8mb3_bin NOT NULL,
--   `session_data` longtext COLLATE utf8mb3_bin NOT NULL,
--   `expire_date` datetime(6) NOT NULL,
--   PRIMARY KEY (`session_key`),
--   KEY `django_session_expire_date_a5c62663` (`expire_date`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `django_session`
-- --

-- LOCK TABLES `django_session` WRITE;
-- /*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `django_site`
-- --

-- DROP TABLE IF EXISTS `django_site`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `django_site` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `domain` varchar(100) COLLATE utf8mb3_bin NOT NULL,
--   `name` varchar(50) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `django_site_domain_a2e37b91_uniq` (`domain`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `django_site`
-- --

-- LOCK TABLES `django_site` WRITE;
-- /*!40000 ALTER TABLE `django_site` DISABLE KEYS */;
-- INSERT INTO `django_site` VALUES (2,'example.com','example.com');
-- /*!40000 ALTER TABLE `django_site` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `notification`
-- --

-- DROP TABLE IF EXISTS `notification`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `notification` (
--   `notification_id` int(11) NOT NULL,
--   `notification_text` varchar(128) COLLATE utf8mb3_bin NOT NULL,
--   `notification_date` datetime(6) DEFAULT NULL,
--   `notification_seen` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`notification_id`),
--   KEY `notification_user_id_id_1d68fb06_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `notification_user_id_id_1d68fb06_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `notification`
-- --

-- LOCK TABLES `notification` WRITE;
-- /*!40000 ALTER TABLE `notification` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `notification` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `pageapp_favouritequestion`
-- --

-- DROP TABLE IF EXISTS `pageapp_favouritequestion`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `pageapp_favouritequestion` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `post_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `pageapp_favouritequestion_post_id_id_user_id_id_abbb155f_uniq` (`post_id_id`,`user_id_id`),
--   KEY `pageapp_favouritequestion_user_id_id_b428210e_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `pageapp_favouritequestion_post_id_id_e857287c_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`),
--   CONSTRAINT `pageapp_favouritequestion_user_id_id_b428210e_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `pageapp_favouritequestion`
-- --

-- LOCK TABLES `pageapp_favouritequestion` WRITE;
-- /*!40000 ALTER TABLE `pageapp_favouritequestion` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `pageapp_favouritequestion` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `post`
-- --

-- DROP TABLE IF EXISTS `post`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `post` (
--   `post_id` int(11) NOT NULL,
--   `post_title` varchar(32) COLLATE utf8mb3_bin DEFAULT NULL,
--   `post_text` varchar(1024) COLLATE utf8mb3_bin DEFAULT NULL,
--   `post_like_count` int(11) NOT NULL,
--   `post_reply_count` int(11) NOT NULL,
--   `post_favourite_count` int(11) NOT NULL,
--   `post_date` datetime(6) DEFAULT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`post_id`),
--   KEY `post_user_id_id_e14c1afe_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `post_user_id_id_e14c1afe_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `post`
-- --

-- LOCK TABLES `post` WRITE;
-- /*!40000 ALTER TABLE `post` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `post` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `post_image`
-- --

-- DROP TABLE IF EXISTS `post_image`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `post_image` (
--   `image_id` int(11) NOT NULL,
--   `image_url` varchar(256) COLLATE utf8mb3_bin DEFAULT NULL,
--   `post_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`image_id`),
--   KEY `post_image_post_id_id_5dffe075_fk_post_post_id` (`post_id_id`),
--   CONSTRAINT `post_image_post_id_id_5dffe075_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `post_image`
-- --

-- LOCK TABLES `post_image` WRITE;
-- /*!40000 ALTER TABLE `post_image` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `post_image` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `post_report`
-- --

-- DROP TABLE IF EXISTS `post_report`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `post_report` (
--   `report_id` int(11) NOT NULL,
--   `report_text` varchar(256) COLLATE utf8mb3_bin DEFAULT NULL,
--   `report_date` datetime(6) DEFAULT NULL,
--   `post_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) DEFAULT NULL,
--   PRIMARY KEY (`report_id`),
--   KEY `post_report_post_id_id_f100078e_fk_post_post_id` (`post_id_id`),
--   KEY `post_report_user_id_id_a138c0c4_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `post_report_post_id_id_f100078e_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`),
--   CONSTRAINT `post_report_user_id_id_a138c0c4_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `post_report`
-- --

-- LOCK TABLES `post_report` WRITE;
-- /*!40000 ALTER TABLE `post_report` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `post_report` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `post_tag`
-- --

-- DROP TABLE IF EXISTS `post_tag`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `post_tag` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `post_id_id` int(11) NOT NULL,
--   `tag_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `post_tag_tag_id_id_post_id_id_0d28391e_uniq` (`tag_id_id`,`post_id_id`),
--   KEY `post_tag_post_id_id_b181aeae_fk_post_post_id` (`post_id_id`),
--   CONSTRAINT `post_tag_post_id_id_b181aeae_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`),
--   CONSTRAINT `post_tag_tag_id_id_4e0429d4_fk_tag_tag_id` FOREIGN KEY (`tag_id_id`) REFERENCES `tag` (`tag_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `post_tag`
-- --

-- LOCK TABLES `post_tag` WRITE;
-- /*!40000 ALTER TABLE `post_tag` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `post_tag` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `reply`
-- --

-- DROP TABLE IF EXISTS `reply`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `reply` (
--   `reply_id` int(11) NOT NULL,
--   `reply_text` varchar(512) COLLATE utf8mb3_bin NOT NULL,
--   `reply_like_count` int(11) NOT NULL,
--   `reply_date` datetime(6) DEFAULT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`reply_id`),
--   KEY `reply_user_id_id_bb793e56_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `reply_user_id_id_bb793e56_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `reply`
-- --

-- LOCK TABLES `reply` WRITE;
-- /*!40000 ALTER TABLE `reply` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `reply` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `reply_report`
-- --

-- DROP TABLE IF EXISTS `reply_report`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `reply_report` (
--   `report_id` int(11) NOT NULL,
--   `report_text` varchar(256) COLLATE utf8mb3_bin DEFAULT NULL,
--   `report_date` datetime(6) DEFAULT NULL,
--   `reply_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`report_id`),
--   KEY `reply_report_reply_id_id_b5a04a42_fk_reply_reply_id` (`reply_id_id`),
--   KEY `reply_report_user_id_id_3fda21a2_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `reply_report_reply_id_id_b5a04a42_fk_reply_reply_id` FOREIGN KEY (`reply_id_id`) REFERENCES `reply` (`reply_id`),
--   CONSTRAINT `reply_report_user_id_id_3fda21a2_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `reply_report`
-- --

-- LOCK TABLES `reply_report` WRITE;
-- /*!40000 ALTER TABLE `reply_report` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `reply_report` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `reply_to_post`
-- --

-- DROP TABLE IF EXISTS `reply_to_post`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `reply_to_post` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `post_id_id` int(11) NOT NULL,
--   `reply_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `reply_to_post_post_id_id_reply_id_id_42e805aa_uniq` (`post_id_id`,`reply_id_id`),
--   KEY `reply_to_post_reply_id_id_717a0eb4_fk_reply_reply_id` (`reply_id_id`),
--   CONSTRAINT `reply_to_post_post_id_id_a9a30e9f_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`),
--   CONSTRAINT `reply_to_post_reply_id_id_717a0eb4_fk_reply_reply_id` FOREIGN KEY (`reply_id_id`) REFERENCES `reply` (`reply_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `reply_to_post`
-- --

-- LOCK TABLES `reply_to_post` WRITE;
-- /*!40000 ALTER TABLE `reply_to_post` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `reply_to_post` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `reply_to_reply`
-- --

-- DROP TABLE IF EXISTS `reply_to_reply`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `reply_to_reply` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `reply_id_id` int(11) NOT NULL,
--   `source_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `reply_to_reply_source_id_id_reply_id_id_e892e55b_uniq` (`source_id_id`,`reply_id_id`),
--   KEY `reply_to_reply_reply_id_id_489e2cd2_fk_reply_reply_id` (`reply_id_id`),
--   CONSTRAINT `reply_to_reply_reply_id_id_489e2cd2_fk_reply_reply_id` FOREIGN KEY (`reply_id_id`) REFERENCES `reply` (`reply_id`),
--   CONSTRAINT `reply_to_reply_source_id_id_b4ed70b7_fk_reply_reply_id` FOREIGN KEY (`source_id_id`) REFERENCES `reply` (`reply_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `reply_to_reply`
-- --

-- LOCK TABLES `reply_to_reply` WRITE;
-- /*!40000 ALTER TABLE `reply_to_reply` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `reply_to_reply` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `search_history`
-- --

-- DROP TABLE IF EXISTS `search_history`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `search_history` (
--   `search_id` int(11) NOT NULL,
--   `search_text` varchar(128) COLLATE utf8mb3_bin NOT NULL,
--   `search_date` datetime(6) DEFAULT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`search_id`),
--   KEY `search_history_user_id_id_bac48dee_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `search_history_user_id_id_bac48dee_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `search_history`
-- --

-- LOCK TABLES `search_history` WRITE;
-- /*!40000 ALTER TABLE `search_history` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `search_history` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `socialaccount_socialaccount`
-- --

-- DROP TABLE IF EXISTS `socialaccount_socialaccount`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `socialaccount_socialaccount` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `provider` varchar(30) COLLATE utf8mb3_bin NOT NULL,
--   `uid` varchar(191) COLLATE utf8mb3_bin NOT NULL,
--   `last_login` datetime(6) NOT NULL,
--   `date_joined` datetime(6) NOT NULL,
--   `extra_data` longtext COLLATE utf8mb3_bin NOT NULL,
--   `user_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `socialaccount_socialaccount_provider_uid_fc810c6e_uniq` (`provider`,`uid`),
--   KEY `socialaccount_socialaccount_user_id_8146e70c_fk_auth_user_id` (`user_id`),
--   CONSTRAINT `socialaccount_socialaccount_user_id_8146e70c_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `socialaccount_socialaccount`
-- --

-- LOCK TABLES `socialaccount_socialaccount` WRITE;
-- /*!40000 ALTER TABLE `socialaccount_socialaccount` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `socialaccount_socialaccount` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `socialaccount_socialapp`
-- --

-- DROP TABLE IF EXISTS `socialaccount_socialapp`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `socialaccount_socialapp` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `provider` varchar(30) COLLATE utf8mb3_bin NOT NULL,
--   `name` varchar(40) COLLATE utf8mb3_bin NOT NULL,
--   `client_id` varchar(191) COLLATE utf8mb3_bin NOT NULL,
--   `secret` varchar(191) COLLATE utf8mb3_bin NOT NULL,
--   `key` varchar(191) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `socialaccount_socialapp`
-- --

-- LOCK TABLES `socialaccount_socialapp` WRITE;
-- /*!40000 ALTER TABLE `socialaccount_socialapp` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `socialaccount_socialapp` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `socialaccount_socialapp_sites`
-- --

-- DROP TABLE IF EXISTS `socialaccount_socialapp_sites`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `socialaccount_socialapp_sites` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `socialapp_id` bigint(20) NOT NULL,
--   `site_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `socialaccount_socialapp_sites_socialapp_id_site_id_71a9a768_uniq` (`socialapp_id`,`site_id`),
--   KEY `socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id` (`site_id`),
--   CONSTRAINT `socialaccount_socialapp_sites_site_id_2579dee5_fk_django_site_id` FOREIGN KEY (`site_id`) REFERENCES `django_site` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `socialaccount_socialapp_sites`
-- --

-- LOCK TABLES `socialaccount_socialapp_sites` WRITE;
-- /*!40000 ALTER TABLE `socialaccount_socialapp_sites` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `socialaccount_socialapp_sites` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `socialaccount_socialtoken`
-- --

-- DROP TABLE IF EXISTS `socialaccount_socialtoken`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `socialaccount_socialtoken` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `token` longtext COLLATE utf8mb3_bin NOT NULL,
--   `token_secret` longtext COLLATE utf8mb3_bin NOT NULL,
--   `expires_at` datetime(6) DEFAULT NULL,
--   `account_id` bigint(20) NOT NULL,
--   `app_id` bigint(20) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `socialaccount_socialtoken_app_id_account_id_fca4e0ac_uniq` (`app_id`,`account_id`),
--   KEY `socialaccount_socialtoken_account_id_951f210e_fk` (`account_id`),
--   CONSTRAINT `socialaccount_socialtoken_account_id_951f210e_fk` FOREIGN KEY (`account_id`) REFERENCES `socialaccount_socialaccount` (`id`),
--   CONSTRAINT `socialaccount_socialtoken_app_id_636a42d7_fk` FOREIGN KEY (`app_id`) REFERENCES `socialaccount_socialapp` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `socialaccount_socialtoken`
-- --

-- LOCK TABLES `socialaccount_socialtoken` WRITE;
-- /*!40000 ALTER TABLE `socialaccount_socialtoken` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `socialaccount_socialtoken` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `tag`
-- --

-- DROP TABLE IF EXISTS `tag`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `tag` (
--   `tag_id` int(11) NOT NULL,
--   `tag_name` varchar(32) COLLATE utf8mb3_bin NOT NULL,
--   PRIMARY KEY (`tag_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `tag`
-- --

-- LOCK TABLES `tag` WRITE;
-- /*!40000 ALTER TABLE `tag` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `tag` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `user`
-- --

-- DROP TABLE IF EXISTS `user`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `user` (
--   `user_id` int(11) NOT NULL,
--   `user_nickname` varchar(16) COLLATE utf8mb3_bin DEFAULT NULL,
--   `user_is_endorsed` int(11) NOT NULL,
--   `user_is_mod` int(11) NOT NULL,
--   `user_flags_received` int(11) NOT NULL,
--   `user_likes_received` int(11) NOT NULL,
--   PRIMARY KEY (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `user`
-- --

-- LOCK TABLES `user` WRITE;
-- /*!40000 ALTER TABLE `user` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `user` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `user_post_like`
-- --

-- DROP TABLE IF EXISTS `user_post_like`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `user_post_like` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `post_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `user_post_like_user_id_id_post_id_id_1201f8f1_uniq` (`user_id_id`,`post_id_id`),
--   KEY `user_post_like_post_id_id_6047673c_fk_post_post_id` (`post_id_id`),
--   CONSTRAINT `user_post_like_post_id_id_6047673c_fk_post_post_id` FOREIGN KEY (`post_id_id`) REFERENCES `post` (`post_id`),
--   CONSTRAINT `user_post_like_user_id_id_7b895284_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `user_post_like`
-- --

-- LOCK TABLES `user_post_like` WRITE;
-- /*!40000 ALTER TABLE `user_post_like` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `user_post_like` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `user_reply_like`
-- --

-- DROP TABLE IF EXISTS `user_reply_like`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `user_reply_like` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `reply_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `user_reply_like_user_id_id_reply_id_id_bd6e82a6_uniq` (`user_id_id`,`reply_id_id`),
--   KEY `user_reply_like_reply_id_id_38d2621d_fk_reply_reply_id` (`reply_id_id`),
--   CONSTRAINT `user_reply_like_reply_id_id_38d2621d_fk_reply_reply_id` FOREIGN KEY (`reply_id_id`) REFERENCES `reply` (`reply_id`),
--   CONSTRAINT `user_reply_like_user_id_id_3497895a_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `user_reply_like`
-- --

-- LOCK TABLES `user_reply_like` WRITE;
-- /*!40000 ALTER TABLE `user_reply_like` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `user_reply_like` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `user_tag`
-- --

-- DROP TABLE IF EXISTS `user_tag`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `user_tag` (
--   `id` bigint(20) NOT NULL AUTO_INCREMENT,
--   `tag_id_id` int(11) NOT NULL,
--   `user_id_id` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `user_tag_tag_id_id_user_id_id_bc45fad2_uniq` (`tag_id_id`,`user_id_id`),
--   KEY `user_tag_user_id_id_7624c39e_fk_user_user_id` (`user_id_id`),
--   CONSTRAINT `user_tag_tag_id_id_72c7fd19_fk_tag_tag_id` FOREIGN KEY (`tag_id_id`) REFERENCES `tag` (`tag_id`),
--   CONSTRAINT `user_tag_user_id_id_7624c39e_fk_user_user_id` FOREIGN KEY (`user_id_id`) REFERENCES `user` (`user_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `user_tag`
-- --

-- LOCK TABLES `user_tag` WRITE;
-- /*!40000 ALTER TABLE `user_tag` DISABLE KEYS */;
-- /*!40000 ALTER TABLE `user_tag` ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- -- Dump completed on 2021-10-26 14:13:55
