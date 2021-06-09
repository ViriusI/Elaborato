<?php
require_once('php/database.php');
if (isset($_POST['register'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $email = $_POST['email'] ?? '';
    $isUsernameValid = filter_var(
        $username,
        FILTER_VALIDATE_REGEXP, [
            "options" => [
                "regexp" => "/^[a-z\d_]{3,20}$/i"
            ]
        ]
    );
    $pwdLenght = mb_strlen($password);
    
    if (empty($username) || empty($password) || empty($email)) {
        $msg = 'Compila tutti i campi';
    } elseif (false === $isUsernameValid) {
        $msg = 'Lo username non è valido.';
    } elseif ($pwdLenght < 3 || $pwdLenght > 20) {
        $msg = 'La password non è valida';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $msg = "Email non valida";
    } else {
        $password_hash = password_hash($password, PASSWORD_BCRYPT);

        $query = "
            SELECT id
            FROM utenti
            WHERE username = :username
        ";
        
        $check = $pdo->prepare($query);
        $check->bindParam(':username', $username, PDO::PARAM_STR);
        $check->execute();
        
        $utente = $check->fetchAll(PDO::FETCH_ASSOC);
        
        if (count($utente) > 0) {
            $msg = 'Username già in uso';
        } else {
            $query = "
                INSERT INTO utenti
                VALUES (0, :username, :password, :email)
            ";
        
            $check = $pdo->prepare($query);
            $check->bindParam(':username', $username, PDO::PARAM_STR);
            $check->bindParam(':password', $password_hash, PDO::PARAM_STR);
            $check->bindParam(':email', $email, PDO::PARAM_STR);
            $check->execute();
            
            
            header('Location: login.html');
            exit();
            
        }
    }
    
    include 'register.html';
    echo "<script type='text/javascript'>alert('$msg');</script>";
}
