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
    }

    public function logOut($param)
    {
        $this->model->logOut();

        include_once "mvc/views/login.php";
    }

    public function getDashboardView($param)
    {
        include_once "mvc/views/dashboard.php";
    }

    public function getView($param)
    {
        $email = $this->email;
        $password = $this->password;

        if (isset($email)) 
        {
            $hasLoggedIn = $this->model->logIn($email, $password);

            if ($hasLoggedIn) {
                $this->getDashboardView($param);
            }
        } else {
            include_once "mvc/views/login.php";
        }
    }
}