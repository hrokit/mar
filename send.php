<?php

$recepient = "hrk.kho@gmail.com";
$sitename = "Mar Personalizado";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$reseive_message = "Name: $name \nEmail: $email \nMessage: $message";

$pagetitle = "From site \"$sitename\"";
mail($recepient, $pagetitle, $reseive_message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
