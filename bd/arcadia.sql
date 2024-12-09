-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Dez-2024 às 22:21
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `arcadia`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `Codigo` int(32) NOT NULL,
  `Nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogo`
--

CREATE TABLE `jogo` (
  `Codigo` int(32) NOT NULL,
  `Jogo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `score`
--

CREATE TABLE `score` (
  `Codigo` int(11) NOT NULL,
  `CodigoJogo` int(11) NOT NULL,
  `CodigoJogador` int(11) NOT NULL,
  `Pontuacao` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`Codigo`);

--
-- Índices para tabela `jogo`
--
ALTER TABLE `jogo`
  ADD PRIMARY KEY (`Codigo`);

--
-- Índices para tabela `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`Codigo`),
  ADD KEY `CodigoJogador` (`CodigoJogador`),
  ADD KEY `CodigoJogo` (`CodigoJogo`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`CodigoJogador`) REFERENCES `jogador` (`Codigo`),
  ADD CONSTRAINT `score_ibfk_2` FOREIGN KEY (`CodigoJogo`) REFERENCES `jogo` (`Codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
