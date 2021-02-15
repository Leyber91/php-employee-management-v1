<?php

require('avatarManager.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET': {
            $ids = !empty($_GET['ids']) ? explode(',', $_GET['ids']) : [];
            echo getAvatars($ids);
            break;
        }
    case 'POST': {
            if (isset($_POST)) {
                addAvatar($_POST);
                http_response_code(201);
            } else {
                http_response_code(400);
            }
            break;
        }
}
