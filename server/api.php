<?php
    header("Access-Control-Allow-Origin: *");

    $string = file_get_contents('../database/data.json');

    header('Content-Type: application/json');

    echo $string;