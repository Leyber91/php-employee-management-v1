<?php
require_once "mvc/controllers/errors.php";

class App
{
    public $router;
    public $controllerPath;
    public $controllerName;

    public function __construct($router)
    {
        $this->controllerName = $router->getController();
        $this->controllerPath = "mvc/controllers/" . $this->controllerName . ".php";
        $this->method = $router->getMethod();

        if (file_exists($this->controllerPath))
        {
            require $this->controllerPath;

            $controller = new $this->controllerName;

            if (isset($this->method))
            {
                $controlller->{$this->method}();
            }
        } else {
            $controller = new Errors();
        }
    }
}
?>