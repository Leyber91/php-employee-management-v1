<?php

include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/loginManager.php');


class Login
{
    public $email;
    public $password;

    function __construct()
    {
        $this->email = $_POST['email'];
        $this->password = $_POST['password'];

        $this->checkLogin();
    }

    public function checkLogin()
    {
        $email = $this->email;
        $password = $this->password;

        if (isset($email)) 
        {
            $hasLoggedIn = LoginModel::logIn($email, $password);

            if ($hasLoggedIn) {
                header('Location: http://localhost:8000/mvc/views/dashboard.php');
            } else {
                header('Location: http://localhost:8000/?error=true');
            }
        } else {
            $hasLoggedOut = LoginModel::logOut();
    
            header('Location: http://localhost:8000/mvc/views/login.php');
        }
    }
}