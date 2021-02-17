<?php

require('employeeManager.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
            $ids = !empty($_GET['ids']) ? explode(',', $_GET['ids']) : [];
            echo getEmployees($ids);
            break;
        }
    case 'POST': {
            if (isset($_POST)) {
                $added = addEmployee($_POST);
                header('Location: http://localhost/php-employee-management-v1/src/dashboard.php');
                echo json_encode($added);
                http_response_code(201);
            } else {
                http_response_code(400);
            }
            break;
        }
    case 'PUT': {
            $employeeData = file_get_contents('php://input');
            updateEmployee(json_decode($employeeData, true));
            http_response_code(204);
            break;
        }
    case 'DELETE': {
            if (isset($_GET['id'])) {
                deleteEmployee($_GET['id']);
                http_response_code(204);
            }
            break;
        }
}
