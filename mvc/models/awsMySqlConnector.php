<?php
    class AwsMySqlConnector
    {
        private $servername = "";
        private $username = "";
        private $password = "";
        private $dbname = "";
        private $portname = 3306;
        public $conn;

        function __construct()
        {
            $this->conn = $this->connect();
        }

        private function connect()
        {
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            return $conn = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname, $this->portname);
        }

        public function getData($query)
        {
            return mysqli_fetch_all(mysqli_query($this->conn, $query));
        }
    }
?>