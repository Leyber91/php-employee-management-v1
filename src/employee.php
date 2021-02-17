<?php
include_once('./library/employeeManager.php');
include_once('./library/avatarManager.php');
include('./library/sessionHelper.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/4f8800fac8.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/main.css">
  <link rel="stylesheet" href="../assets/css/employee.css">
  <link rel="stylesheet" href="../assets/css/modal.css">

  <title>Employee</title>
</head>

<body class='employee' id='employee'>
  <?php include('../assets/html/header.html'); ?>
  <?php
  if (isset($_GET['id'])) {
    $employee = getEmployeeAsArray($_GET['id']);
    $avatar = getAvatar($employee['id']);
  } else {
    die();
  }
  if (!isset($employee['linkedinLink'])) {
    $employee['linkedinLink'] = null;
  }
  if (!isset($employee['githubLink'])) {
    $employee['githubLink'] = null;
  }
  if( !isset( $employee['age'] ) ){
    $employee['age']=' - ';
  }

  echo "<section class='employee__page'>
    <button id='employeeEditButton' class='material-icons employee__edit__button' data-id='" . $employee['id'] . "'>edit</button>
        <div class='employee__avatar'></div>
        <div class='employee__info'>
          <h2 class='employee__name'>" . $employee['name'] . " " . $employee['lastName'] . "</h2>
          <h4 class='employee__info'>" . $employee['gender'] . ", " . $employee['age'] . "</h4>
          <h4 class='employee__role'>" . $employee['role'] . "</h4>
          <h4 class='employee__ubication'>" . $employee['city'] . ", " .$employee['state'] . ", " . $employee['country'] . "</h4>
          <div class='employee__contact'>
            <div class='employee__email'>
              <a href='mailto:" . $employee['email'] . "'>          
                <span class='material-icons contact__icon'>email</span>
              </a>
            </div>
            <div class='employee__phone'>
              <a href='callto:" . $employee['phoneNumber'] . "'>          
                <span class='material-icons contact__icon'>stay_primary_portrait</span>
              </a>
            </div>".
            (isset($employee['linkedinLink']) ?
            "<div class='awesome employee__linkedin'>
              <a href='" . "https://" . $employee['linkedinLink'] . "'>   
                <span class='fab fa-linkedin contact__icon'></span>       
              </a>
            </div>" : 
            '')
            .""
            .
            (isset($employee['githubLink']) ?
            "<div class='awesome employee__github'>
              <a href='" . "https://" . $employee['githubLink'] . "'>   
                <span class='fab fa-github contact__icon'></span>       
              </a>
            </div>" : 
            '')
            ."
        </div>
        </section>"

  ?>
  <?php include('../assets/html/footer.html'); ?>

  <script type="module">
    import {
      Avatar
    } from '../assets/js/modules/avatar/Avatar.js'
    import {
      createAvatarModal
    } from "../assets/js/modules/components/avatarModal.js";
    import {
      createEditModal
    } from "../assets/js/modules/components/editModal.js";

    let $avatarContainer = document.querySelector('.employee__avatar');
    let employee = JSON.parse(<?php echo json_encode(getEmployee($_GET['id'])); ?>);
    let avatarObj = JSON.parse(<?php echo json_encode($avatar); ?>);
    avatarObj = avatarObj ? avatarObj : {
      properties: {}
    };
    let avatar = new Avatar(employee.gender, avatarObj.properties);

    const $editButon = document.getElementById('employeeEditButton');
    $editButon.addEventListener('click', function() {
      createEditModal(employee);
    });

    $avatarContainer.innerHTML = avatar.getAvatar({
      width: 200
    });
    let onAvatarModalClose = (avatarProps) => {
      axios.put(`http://localhost/php-employee-management-v1/src/library/avatarController.php?id=${avatarObj.id}`, {
          properties: avatarProps,
          employeeId: employee.id
        })
        .then((response) => {
          repaintAvatar(response.data.properties);
        })
    }
    $avatarContainer.addEventListener('click', () => createAvatarModal(employee.gender, avatar.getProperties(), onAvatarModalClose))

    function programateWink() {
      let $avatarContainer = document.querySelector('.employee__avatar');
      setTimeout(() => {
        $avatarContainer.innerHTML = avatar.getEyesClosedAvatar({
          width: 200
        });
        setTimeout(() => {
          $avatarContainer.innerHTML = avatar.getAvatar({
            width: 200
          });
        }, getRandomInt(120, 160))
        programateWink();
      }, getRandomInt(2000, 10000))
    }

    programateWink()

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function repaintAvatar(props) {
      avatar.setProperties(props);
      let $avatarContainer = document.querySelector('.employee__avatar');
      $avatarContainer.innerHTML = avatar.getAvatar({
        width: 200
      });
    }
  </script>

</body>

</html>