<?php

include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/loginManager.php');

if (isset($_SESSION['userId'])) {
    if (time() - $_SESSION['time'] > $_SESSION['lifeTime']) {
        logout();
    }
} else {
    header('Location: http://localhost:8000/');
}
