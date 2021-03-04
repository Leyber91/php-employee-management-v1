<?php
include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/login.php');
include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/avatar.php');

class Login
{
    public $email;
    public $password;

    function __construct()
    {
        $this->email = $_POST['email'];
        $this->password = $_POST['password'];
        $this->model = new LoginModel();
        $this->avatarModel = new AvatarModel();
    }

    public function logOut($param)
    {
        $avatars = $this->avatarModel->getAvatars();

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
            $avatars = $this->avatarModel->getAvatars();

            include_once "mvc/views/login.php";
        }
    }
}