<?php
    require_once "core/Router.php";
    require_once "core/App.php";

    $router = new Router();
    $app = new App($router);
?>