-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: prototipo
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `nome` varchar(100) DEFAULT NULL,
  `idade` int(11) DEFAULT NULL,
  `cargo` varchar(100) DEFAULT NULL,
  `salario` decimal(7,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('Guilherme Faria Mendonça',20,'Analista de Sistemas',6774.21),('Paola Gisela da Conceição',25,'Auxiliar Administrativo',1265.34),('Gabriela Esposito de Oliveira',18,'Recepcionista',1310.74),('Marcio Augusto de Couto e Lins',31,'Designer de Interiores',4521.11),('Mariana Osaka Yoshimura',40,'Enfermeiro',5574.03),('Ana Clara Bittencourt',54,'Professor',3418.90),('Mariano Timóteo Romanov',22,'Juiz',25647.36),('Armando Cavalcante Martins',54,'Engenheiro Civil',5443.74),('Gabriela Akemi Watanabe',27,'Contador',6912.95),('Luciana Zhao Tsang',19,'Designer',2140.33),('Ravi Queiroz Mahal',30,'Desenvolvedor Pleno',4035.78),('Altair Fayed Hadid',55,'Engenheiro de Software',15744.09),('Felipe Smith Copérnico',49,'Médico',10023.41),('João Roberto Campos',18,'Auxiliar Administrativo',998.77),('Gilberto da Costa Figueredo',40,'Secretário de Segurança Pública',33105.00),('Rosa Dominguez Palencia',37,'Comerciante',3416.99),('Clarice Montreau de Orleans',25,'Biólogo Marinho',6112.40),('Mauricio Augusto Beckhauser',33,'Engenheiro Civil',7661.88),('Amanda Alves Klabin',17,'Operador de Telemarketing',769.00),('Kleber Harrison Lee',60,'Advogado',8009.16),('Hector Cordeiro Diaz',64,'Marceneiro',2154.32),('Renan Garcia Motiz',24,'Arquiteto',12442.44),('João Ricardo Santana Filho',65,'Mecânico',2944.65),('Renato Gonzaga Turguniev',46,'Médico',13057.44),('Guilherme Tomás Machado',34,'Vendedor',4210.54),('Luciana Roberta França',17,'Estoquista',794.12),('Giovanna Cavalcanti Fiorella',32,'Professor',3644.10),('Robson Fernandes dos Santos',44,'Professor Universitário',4711.01),('Rafael Cardoso Santana',29,'Analista de Qualidade',6220.47),('Giovanna Pietra Fetuccini',27,'Engenheiro Químico',7216.64),('Jamón Gutierrez Mendonça',34,'DBA',13441.36),('Beatriz Coelho Garcia',56,'Professor',3464.71),('Gabriel da Costa Neto',40,'Engenheiro Elétrico',8174.33),('Felipe Nascimento Cordeiro',19,'Auxiliar de RH',1755.23),('Pedro Martins de Oliveira',25,'Desenvolvedor Sênior',10421.65),('Rafael Martins Cordeiro dos Santos',20,'Programador',5422.91),('Alessandra Souza Cruz',18,'DBM',2200.00),('Ramón Martins Cordeiro dos Santos',24,'Consultor RPA',7310.45),('Jorge Aparecido de Souza',37,'Dentista',6187.34),('George Borenstein Butler',38,'Advogado',8104.96);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-23 20:06:31
