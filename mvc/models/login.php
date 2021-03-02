<?php

class LoginModel
{

    function __construct()
    {
        define('USERS_JSON_PATH', "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/resources/users.json");


    }
    public function logIn(string $userEmail, string $password): bool
    {
        session_start();

        $user = $this->getUser($userEmail);
    
        if (isset($user)) {
    
            $isPasswordCorrect = password_verify($password, $user->password);
    
            if ($isPasswordCorrect) {
                $_SESSION['userId'] = $user->userId;
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







