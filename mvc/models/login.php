<?php
include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/awsMySqlConnector.php');

class LoginModel
{
    function __construct()
    {
        define('USERS_JSON_PATH', "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/resources/users.json");

        $this->dbconn = new AwsMySqlConnector();
    }
    public function logIn(string $email, string $password): bool
    {
        session_start();

        $user = $this->dbconn->getData("SELECT * FROM users WHERE email = '$email'");
    
        if (isset($user)) {
    
            $isPasswordCorrect = password_verify($password, $user[0][2]);
    
            if ($isPasswordCorrect) {
                $_SESSION['userId'] = $user[0][0];
                $_SESSION['time'] = time();
                $_SESSION['lifeTime'] = 600;
    
                return true;
            } else {
                return false;
            }
        } else {
    
            return false;
        }
    }

    public function logOut()
    {
        if (isset($_SESSION['userId'])) {
            session_destroy();
        }
    }

    public function getUser(string $userEmail)
    {
        $users = json_decode(file_get_contents(USERS_JSON_PATH))->users;

        foreach ($users as $user) {
            if ($user->email === $userEmail) {
                return $user;
            }
        }
    }
}







