CREATE TABLE `utenti` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci AUTO_INCREMENT=1;

CREATE TABLE `giochi` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  `descrizione` text NOT NULL,
  `img` text NOT NULL,
  `rating` float(4, 2) NOT NULL,
  `website` text NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `piattaforme` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
)

CREATE TABLE `generi` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
)

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `nome` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
)

--Tabelle date dalle associazioni N:N

CREATE TABLE `salva` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idUtente` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idUtente`) REFERENCES `utenti`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `utilizza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPiattaforma` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idPiattaforma`) REFERENCES `piattaforme`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `appartiene` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idGenere` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idGenere`) REFERENCES `generi`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `identifica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idTag` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idTag`) REFERENCES `tags`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)