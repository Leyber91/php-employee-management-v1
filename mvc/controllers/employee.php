<?php



class Employee
{
    public $method;

    function __construct()
    {
        require('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/employee.php');
        $this->method = $_SERVER['REQUEST_METHOD'];
        $this->model = new EmployeeModel();
    }

    public function getEmployeeView($param)
    {        
        $param = (int)$param;

        $employee = json_decode($this->model->getEmployee($param));

        include_once "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/views/employee.php";
    }

    public function getEmployees($param)
    {
        $ids = !empty($_GET['ids']) ? explode(',', $_GET['ids']) : [];

        echo $this->model->getEmployees($ids);
    }

    public function addEmployee($param)
    {

        // TODO: file_put_contents('php://stderr', print_r("name:" . $_POST, TRUE)); // Terminal log in php

        if (isset($_POST)) {
            $added = $this->model->addEmployee($_POST);

            include_once "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/views/dashboard.php";
        }
    }
}


// switch () {
//     case 'GET': {
//             $ids = !empty($_GET['ids']) ? explode(',', $_GET['ids']) : [];

//             echo 
//             break;
//         }
//     case 'POST': {
//             if (isset($_POST)) {
//                 $added = addEmployee($_POST);
//                 header('Location: http://localhost:8000/mvc/views/dashboard.php');
//                 echo json_encode($added);
//                 http_response_code(201);
//             } else {
//                 http_response_code(400);
//             }
//             break;
//         }
//     case 'PUT': {
//             $employeeData = file_get_contents('php://input');
//             updateEmployee(json_decode($employeeData, true));
//             http_response_code(204);
//             break;
//         }
//     case 'DELETE': {
//             if (isset($_GET['id'])) {
//                 deleteEmployee($_GET['id']);
//                 http_response_code(204);
//             }
//             break;
//         }
// }
