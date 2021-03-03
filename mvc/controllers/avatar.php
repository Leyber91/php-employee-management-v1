<?php

class Avatar
{
    public $model;
    public function __construct()
    {
        require('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/mvc/models/avatar.php');

        $this->model = new AvatarModel();
    }

    public function getAvatars($param)
    {
        $ids = !empty($_GET['employeeIds']) ? explode(',', $_GET['employeeIds']) : [];
        echo $this->model->getAvatars($ids);
    }

    public function createAvatar($param)
    {
        $added = $this->model->addAvatar(json_decode(file_get_contents('php://input'), true));
        file_put_contents('php://stderr', print_r("patata", TRUE)); // Terminal log in php

        echo json_encode($added);
    }

    public function updateAvatar($param)
    {
        $avatarData = json_decode(file_get_contents('php://input'), true);
        if($param) {
            $avatarData['id'] = (int)$param;
        } else {
            http_response_code(400);
            die();
        }
        $updated = $this->model->updateAvatar($avatarData);
        echo json_encode($updated); 
    }
}


// switch ($_SERVER['REQUEST_METHOD']) {
//     case 'GET': {
//         $ids = !empty($_GET['employeeIds']) ? explode(',', $_GET['employeeIds']) : [];
//         echo getAvatars($ids);
//         break;
//     }
//     case 'POST': {
//         $added = addAvatar(json_decode(file_get_contents('php://input'), true));
//         echo json_encode($added);
//         http_response_code(201);
//         break;
//     }
//     case 'PUT': {
//         $avatarData = json_decode(file_get_contents('php://input'), true);
//         if(isset($_GET['id'])) {
//             $avatarData['id'] = (int)$_GET['id'];
//         } else {
//             http_response_code(400);
//             die();
//         }
//         $updated = updateAvatar($avatarData);
//         echo json_encode($updated);        
//         http_response_code(200);
//         break;
//     }
// }
