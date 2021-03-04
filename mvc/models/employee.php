<?php
include_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/awsMySqlConnector.php');

class EmployeeModel
{
    public $employeeJson;
    function __construct()
    {
        $this->employeeJson = "/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/resources/employees.json";

        require_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/src/library/helper.php');
        require_once('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/avatar.php');

        $this->avatarModel = new AvatarModel();
        $this->dbconn = new AwsMySqlConnector();
    }

    public function addEmployee(array $newEmployee)
    {
        $employees = decodeJsonFile($this->employeeJson);
        $newEmployee['id'] = end($employees)['id'] + 1;
        array_push($employees, $newEmployee);
    
        saveArrayAsJson($this->employeeJson, $employees);

        return $newEmployee;
    }

    public function deleteEmployee(int $id)
    {
        $employees = decodeJsonFile($this->employeeJson);
        $employee = findItemWithId($employees, $id);

        if ($employee) {
            unset($employees[$employee->key]);
            saveArrayAsJson($this->employeeJson, $employees);

            return true;
        } else {
            return false;
        }
    }

    public function updateEmployee($updateEmployee, int $id)
    {
        $updateEmployee['id'] = (int)$updateEmployee['id'];
        $employees = decodeJsonFile($this->employeeJson);
        $employee = findItemWithId($employees, $id);

        if ($employee) {
            $employees[$id -1] = $updateEmployee;

        } else {
            array_push($employees, $updateEmployee);
        }

        saveArrayAsJson($this->employeeJson, array_sort($employees, 'id'));
    }

    public function getEmployees(array $ids = [])
    {
        if (empty($ids)) {

            $employees = $this->dbconn->getData("SELECT * FROM employees");
            $allEmployees = array();

            foreach($employees as $employee) {
                $employeeId = $employee[0];
                $avatar = $this->avatarModel->getAvatar($employeeId)[0];

                array_push($employee, $avatar);
                array_push($allEmployees, $employee);
            }

            var_dump($allEmployees[0]);

            return encodeJson(array_values($allEmployees));
        }
    
        $employees = decodeJsonFile($this->employeeJson);

        $foundEmployees = array();
        foreach ($ids as $id) {
            $avatar = json_decode($this->avatarModel->getAvatar($id), true);
            $found = findItemWithId($employees, $id);
            if ($found) {
                $found->value['avatar'] = $avatar;
                array_push($foundEmployees, $found->value);
            }
        }

        return encodeJson(array_values($foundEmployees));
    }

    public function getEmployee(int $id)
    {
        $employees = decodeJsonFile($this->employeeJson);
        $found = findItemWithId($employees, $id);
        
        $employee = $found ? $found->value : array();

        return encodeJson($employee);
    }

    public function getEmployeeAsArray(int $id)
    {
        $employees = decodeJsonFile($this->employeeJson);
        $found = findItemWithId($employees, $id);
        $employee = $found ? $found->value : array();

        return $employee;
    }
}









