<?php
    require_once "core/Router.php";
    require_once "core/App.php";

    $router = new Router();
    $app = new App($router);


    //$uri = $router->getUri();
    // $controller = $router->getController();
    // $method = $router->getMethod();
    // $param = $router->getParam();
    // echo '<pre>';
    //var_dump($uri);
    // // echo $controller;
    // // echo $method;
    // // echo $param;
    // echo '</pre>';

    
    //include_once "mvc/controllers/$controller.php";
?>