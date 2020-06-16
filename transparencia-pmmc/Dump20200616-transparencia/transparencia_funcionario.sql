-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: transparencia
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `funcionario`
--

DROP TABLE IF EXISTS `funcionario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `funcionario` (
  `rgf` varchar(255) NOT NULL,
  `cargo` varchar(255) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `rendimentos` double NOT NULL,
  PRIMARY KEY (`rgf`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionario`
--

LOCK TABLES `funcionario` WRITE;
/*!40000 ALTER TABLE `funcionario` DISABLE KEYS */;
INSERT INTO `funcionario` VALUES ('10000','Desenvolvedor Java','Rafael Martins Cordeiro dos Santos',7200.76),('20000','DBM','Alessandra de Souza Cruz',5403.25),('30000','Desenvolvedor Frontend','Juan Sanchez Palencia y Fernandez Filho',5476.11),('40000','Desenvolvedor NodeJS','Gabriel Henrique de Oliveira',4222.26),('00001','Analista de Sistemas','Guilherme Faria Mendonça',6774.21),('00002','Auxiliar Administrativo','Paola Gisela da Conceição',1265.34),('00003','Recepcionista','Gabriela Esposito de Oliveira',1310.74),('00004','Designer de Interiores','Marcio Augusto de Couto e Lins',4521.11),('00005','Enfermeiro','Mariana Osaka Yoshimura',5574.03),('00006','Professor','Ana Clara Bittencourt',3418.9),('00007','Juiz','Mariano Timóteo Romanov',25647.36),('00008','Engenheiro Civil','Armando Cavalcante Martins',5443.74),('00009','Contador','Gabriela Akemi Watanabe',6912.95),('00010','Luciana Zhao Tsang','Designer',2140.33),('00011','Desenvolvedor Pleno','Ravi Queiroz Mahal',4035.78),('00012','Engenheiro de Software','Altair Fayed Hadid',15744.09),('00013','Médico','Felipe Smith Copérnico',10023.41),('00014','João Roberto Campos','Auxiliar Administrativo',998.77),('00015','Gilberto da Costa Figueredo','Secretário de Segurança Pública',33105),('00016','Comerciante','Rosa Dominguez Palencia',3416.99),('00017','Clarice Montreau de Orleans','Biólogo Marinho',6112.4),('00018','Engenheiro Civil','Mauricio Augusto Beckhauser',7661.88),('00019','Operador de Telemarketing','Amanda Alves Klabin',769),('00020','Advogado','Kleber Harrison Lee',8009.16),('00021','Marceneiro','Hector Cordeiro Diaz',2154.32),('00022','Arquiteto','Renan Garcia Motiz',12442.44),('00023','Mecânico','João Ricardo Santana Filho',2944.65),('00024','Médico','Renato Gonzaga Turguniev',13057.44),('00025','Vendedor','Guilherme Tomás Machado',4210.54),('00026','Estoquista','Luciana Roberta França',794.12),('00027','Professor','Giovanna Cavalcanti Fiorella',3644.1),('00028','Professor Universitário','Robson Fernandes dos Santos',4711.01),('00029','Analista de Qualidade','Rafael Cardoso Santana',6220.47),('00030','Engenheiro Químico','Giovanna Pietra Fetuccini',7216.64),('00031','DBA','Jamón Gutierrez Mendonça',13441.36),('00032','Professor','Beatriz Coelho Garcia',3464.71),('00033','Engenheiro Elétrico','Gabriel da Costa Neto',8174.33),('00034','Auxiliar de RH','Felipe Nascimento Cordeiro',1755.23),('00035','Desenvolvedor Sênior','Pedro Martins de Oliveira',10421.65),('00036','Consultor RPA','Ramón Martins Cordeiro dos Santos',7310.45),('00037','Dentista','Jorge Aparecido de Souza',6187.34),('00038','Advogado','George Borenstein Butler',8104.96);
/*!40000 ALTER TABLE `funcionario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-16  3:51:51
