CREATE TABLE `utenti` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome_utente` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
)

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
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idUtente` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idUtente`) REFERENCES `utenti`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `??` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idPiattaforma` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idUtente`) REFERENCES `utenti`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `??` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idGenere` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idUtente`) REFERENCES `generi`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)

CREATE TABLE `??` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `idTag` int(11) NOT NULL,
  `idGioco` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`idTag`) REFERENCES `tags`(`id`),
  FOREIGN KEY (`idGioco`) REFERENCES `giochi`(`id`)
)