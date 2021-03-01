
<?php

require('/Users/victorgreco/Documents/personal_projects/php-employee-management-v1/src/library/jokesApi.php');

$joke = getProgrammingJoke();

echo "
    <div class='bubble'>
        <div class='joke-setup'>
        ". $joke['setup'] ."
        </div>
        <div class='joke-punchline'>
        ". $joke['punchline'] ."
        </div>
    </div>
";