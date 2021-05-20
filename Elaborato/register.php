<?php
require_once('php/database.php');
$flag = FALSE;
if (isset($_POST['register'])) {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';
    $isUsernameValid = filter_var(
        $username,
        FILTER_VALIDATE_REGEXP, [
            "options" => [
                "regexp" => "/^[a-z\d_]{3,20}$/i"
            ]
        ]
    );
    $pwdLenght = mb_strlen($password);
    
    if (empty($username) || empty($password)) {
        $flag = TRUE;
        $msg = 'Compila tutti i campi';
    } elseif (false === $isUsernameValid) {
        $flag = TRUE;
        $msg = 'Lo username non è valido.';
    } elseif ($pwdLenght < 3 || $pwdLenght > 20) {
        $flag = TRUE;
        $msg = 'La password non è valida';
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
        
        $user = $check->fetchAll(PDO::FETCH_ASSOC);
        
        if (count($user) > 0) {
            $flag = TRUE;
            $msg = 'Username già in uso';
        } else {
            $query = "
                INSERT INTO utenti
                VALUES (0, :username, :password)
            ";
        
            $check = $pdo->prepare($query);
            $check->bindParam(':username', $username, PDO::PARAM_STR);
            $check->bindParam(':password', $password_hash, PDO::PARAM_STR);
            $check->execute();
            
            if (empty($flag)){
                header('Location: login.html');
                exit();
            }
        }
    }
    echo "<script type='text/javascript'>alert('{$msg}');</script>";
    include 'register.html';
}