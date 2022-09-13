<?php
    $entityBody = file_get_contents('php://input');

    if ($_POST) {
        var_dump($entityBody);
    } else {
        echo "Callback...";
    }
?>