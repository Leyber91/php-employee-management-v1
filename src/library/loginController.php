<?php

require('loginManager.php');

$userEmail = $_POST['emailInput'];
$userPassword = $_POST['passwordInput'];

if (isset($userEmail)) {
    $hasLoggedIn = logIn($userEmail, $userPassword);
    if ($hasLoggedIn) {
        header('Location: ../dashboard.php');
    } else {
        header('Location: ../../index.php?error=true');
    }
} else {
    $hasLoggedOut = logOut();
    header('Location: ../../index.php');
}
