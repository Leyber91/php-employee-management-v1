<?php
include('./library/employeeManager.php');
include('./library/avatarManager.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/4f8800fac8.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/main.css">
  <link rel="stylesheet" href="../assets/css/employee.css">

  <script type="module" src="/php-employee-management-v1/assets/js/Avatar.js"></script>

  <script src="../assets/js/employee.js" type="module"></script>

  <title>Employee</title>
</head>

<body class='employee' id='employee'>
  <?php include('../assets/html/header.html'); ?>
  <?php
  $employee = getEmployeeAsArray($_GET['id']);
  $avatar = getAvatarAsArray($employee['id']);

  echo "<section class='employee__page'>
        <div class='employee__avatar'></div>
        <h2 class='employee__name'>" . $employee['name'] . " " . $employee['lastName'] . "</h2>
        <h5 class='employee__role'>" . $employee['role'] . "</h5>
      </section>"

  ?>
  <?php include('../assets/html/footer.html'); ?>

  <script type="module">
    import { Avatar } from '../assets/js/Avatar.js'

    const avatarContainer = document.querySelector('.employee__avatar');
    const avatarProps = JSON.parse(<?php echo json_encode($avatar); ?>);
    const avatar = new Avatar('male', avatarProps.properties);
    
    avatarContainer.innerHTML = avatar.getAvatar({
      width: 200
    });
  </script>

</body>

</html>