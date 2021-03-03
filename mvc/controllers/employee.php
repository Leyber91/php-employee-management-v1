<?php
class Employee
{
    public $method;

    function __construct()
    {
        require('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/employee.php');
        include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/avatar.php');

        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->model = new EmployeeModel();
        $this->avatarModel = new AvatarModel();
    }

    public function getEmployeeView($param)
    {        
        $param = (int)$param;

        $employee = json_decode($this->model->getEmployee($param));
        $avatar = $this->avatarModel->getAvatar($employee->id);

        include_once "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/views/employee.php";
    }

    public function getEmployees($param)
    {
        $ids = !empty($_GET['ids']) ? explode(',', $_GET['ids']) : [];

        echo $this->model->getEmployees($ids);
    }

    public function addEmployee($param)
    {
        if (isset($_POST)) {
            $added = $this->model->addEmployee($_POST);

            include_once "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/views/dashboard.php";
        }
    }

    public function deleteEmployee($param)
    {
        $param = (int)$param;

        if ($param)
        {
            $this->model->deleteEmployee($param);

            include_once "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/views/dashboard.php";
        }
    }

    public function updateEmployee($param)
    {        
        $param = (int)$param;

        $this->model->updateEmployee($_POST, $param);

        $this->getEmployeeView($param);
    }
}
