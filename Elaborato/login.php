<?php
session_start();
require_once('php/database.php');

if (isset($_SESSION['session_id'])) {
    header('Location: php/dashboard.php');
    exit;
}

if (isset($_POST['login'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if (empty($username) || empty($password)) {
        $msg = 'Inserisci username e password';
    } else {
        $query = "
            SELECT username, password
            FROM utenti
            WHERE username = :username
        ";
        
        $check = $pdo->prepare($query);
        $check->bindParam(':username', $username, PDO::PARAM_STR);
        $check->execute();
        
        $user = $check->fetch(PDO::FETCH_ASSOC);
        
        if (!$user || password_verify($password, $user['password']) === false) {
            $msg = 'Credenziali utente errate';
        } else {
            session_regenerate_id();
            $_SESSION['session_id'] = session_id();
            $_SESSION['session_user'] = $user['username'];
            
            header('Location: secret.html');
            exit;
        }
    }
    echo "<script type='text/javascript'>alert('{$msg}');</script>";
    include 'login.html';
}