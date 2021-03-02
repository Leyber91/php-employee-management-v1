<?php

include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/login.php');

class Login
{
    public $email;
    public $password;

    function __construct()
    {
        $this->email = $_POST['email'];
        $this->password = $_POST['password'];
        $this->model = new LoginModel();
        $this->getView();
    }

    public function logOut()
    {
        $this->model->logOut();

        include_once "mvc/views/login.php";
    }

    public function getView()
    {
        $email = $this->email;
        $password = $this->password;

        if (isset($email)) 
        {
            $hasLoggedIn = $this->model->logIn($email, $password);

            if ($hasLoggedIn) {
                include_once "mvc/views/dashboard.php";
            }
        } else {
            include_once "mvc/views/login.php";
        }
    }
}