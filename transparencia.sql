
-- Banco de dados: `transparencia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
CREATE TABLE IF NOT EXISTS `funcionarios` (
  `RGF` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Cargo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Salario` decimal(8,2) NOT NULL,
  PRIMARY KEY (`RGF`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `historico_salarios`
--

DROP TABLE IF EXISTS `historico_salarios`;
CREATE TABLE IF NOT EXISTS `historico_salarios` (
  `RGF` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Data` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `Salario` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;
