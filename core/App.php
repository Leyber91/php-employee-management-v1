<?php
require_once "mvc/controllers/errors.php";

class App
{
    public $router;
    public $controllerPath;
    public $controllerName;
    public $param;

    public function __construct($router)
    {
        $this->controllerName = $router->getController();
        $this->method = $router->getMethod();
        $this->param = $router->getParam();
        $this->controllerPath = "mvc/controllers/" . $this->controllerName . ".php";

        if (file_exists($this->controllerPath))
        {
            require $this->controllerPath;

            $controller = new $this->controllerName;

            $controller->{$this->method}($this->param);

        } else {
            $controller = new Errors();
        }
    }
}
?>