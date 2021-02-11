<!-- TODO Main view or Employees Grid View here is where you get when logged here there's the grid of employees -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/php-employee-management-v1/assets/css/main.css">
    <link rel="stylesheet" href="/php-employee-management-v1/assets/css/dashboard.css">
    <link rel="stylesheet" href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <script type="module" src="/php-employee-management-v1/assets/js/table.js"></script>
    <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <title>Dashboard</title>
</head>

<body class='dashboard'>
    <?php include('../assets/html/header.html'); ?>
    <main>
        <div id="table-wrapper"></div>
    </main>
</body>

</html>