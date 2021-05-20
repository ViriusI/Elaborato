************************
*** REQUISITI MINIMI ***
************************

Versione PHP 7.0 o maggiore
Estensione PDO attivata

**************************************
*** ISTRUZIONI PER L'INSTALLAZIONE ***
**************************************

Se si utilizza XAMPP, copiare il contenuto della cartella form-login-php dentro la directory C:\xampp\htdocs, quindi visualizzare il form di registrazione all'indirizzo localhost/register.html

Se si utilizza uno spazio web su server remoto copiare il contenuto della cartella form-login-php dentro la root directory del dominio (di solito è public_html), quindi visualizzare il form di registrazione all'indirizzo dominio.tld/register.html dove dominio.tld è il dominio configurato sul server.

Da phpMyAdmin o altro client creare un database di nome test ed eseguire la query contenuta nel file users.sql (cartella sql) per la creazione della tabella users.

Il file database.php contiene l'array $config dove è possibile cambiare i settaggi per la connessione al database MySQL.

******************
*** DISCLAIMER ***
******************

Il codice sorgente contenuto in questa cartella ha scopo puramente dimostrativo. Declino ogni responsabilità per eventuali errori o omissioni da parte mia. Sei libero di condividere, copiare, distribuire e modificare i sorgenti senza nessuna limitazione.