<?php
include_once "php2crm.php";
$method = $_SERVER['REQUEST_METHOD'];

// print_r($_POST);

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #fff;">' ) . "
				<td style='width: 30%; padding: 10px; border: #ccc 1px solid;'><b>$key</b></td>
				<td style='width: 60%; padding: 10px; border: #ccc 1px solid;'>$value</td>
			</tr>
			";
			$message2 .= "<b>".$key."</b> ".$value."%0A";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #fff;">' ) . "
				<td style='width: 30%; padding: 10px; border: #ccc 1px solid;'><b>$key</b></td>
				<td style='width: 60%; padding: 10px; border: #ccc 1px solid;'>$value</td>
			</tr>
			";
			$message2 .= "<b>".$key."</b> ".$value."%0A";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: SONAlab <info@'.$_SERVER["SERVER_NAME"].'>'. PHP_EOL .
'Reply-To: info@'.$_SERVER["SERVER_NAME"] . PHP_EOL;
mail('marketing@sonalab.kz', 'Заявка', $message, $headers );

