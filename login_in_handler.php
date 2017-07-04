<?php
    session_start();

	$db_host = 'localhost';
    $db_user = 'root';
    $db_password = '';
    $db_name = 'mybd';
	$db_connect = mysqli_connect($db_host, $db_user, $db_password, $db_name);
    mysqli_query($db_connect, "SET NAMES 'utf-8'");
    mysqli_query($db_connect, "SET CHARACTER SET 'utf8'");
    mysqli_query($db_connect, "SET SESSION collation_connection = 'utf8_general_ci'");
	
	if(!@$_SESSION['authorized']) {
		$db_user = mysqli_query($db_connect, "SELECT id, login, password, image, name, surname FROM users WHERE (login='".@$_POST['login']."' or email='".@$_POST['login']."') and password='".@$_POST['password']."'");
	
		$db_user_object = mysqli_fetch_object($db_user);
	
		if ($db_user_object) {
			$_SESSION['authorized']=true;
			$_SESSION['id']=$db_user_object->id;
			$_SESSION['login']=$db_user_object->login;
			$_SESSION['password']=$db_user_object->password;
			if(@$db_user_object->image_format) {
				$_SESSION['image']=$db_user_object->id.'.'.$db_user_object->image_format;
			}
			else {
				$_SESSION['image']='none.png';
			}
		}
	}
	else {
		$db_user = mysqli_query($db_connect, "SELECT id, login, password, image, name, surname FROM users WHERE (login='".@$_SESSION['login']."' or email='".@$_SESSION['login']."') and password='".@$_SESSION['password']."'");
	
		$db_user_object = mysqli_fetch_object($db_user);
	}
	if (@$_SESSION['authorized']) {
		echo '<header>
            <button class="exit"><p>Выход</p></button>
			<input type="button" value="В начало <<<" class="go_to_start"></input>
            <div class="user">
                <img src="image/avatars/'.@$_SESSION['image'].'">
                <p>'.@$db_user_object->name.' '.@$db_user_object->surname.'</p>
            </div>
            <button class="profile">
			    <p>Профиль</p>
			</button>
			<div class="profileBox">
			    <div class="profileBox_content"></div>
			</div>
            <button class="grade"><p>Прогресс</p></button>
			<div class="progressBox">
                <div class="progressBox_content"></div>
            </div>
        </header>
		<script type="text/javascript" src="js/header.js"></script>';
		include "courses.html";
	}
	else {
		echo '<script type="text/javascript">
			$(document).ready(function() {
				$(".login_in_form").find(".warning").find("p").fadeIn(0);
			});
		</script>';
	}
?>