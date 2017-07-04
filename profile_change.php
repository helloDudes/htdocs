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

if(@$_POST) {
	$name_length = strlen(utf8_decode($_POST['nameChange']));
	if($name_length>1 and $name_length<21) {
		$surname_length = strlen(utf8_decode($_POST['surnameChange']));
		if($surname_length>1 and $surname_length<21) {
		    if(strlen(utf8_decode($_POST['emailChange']))<51) {
				if(strlen(utf8_decode($_POST['numberChange']))<51) {
					if(strlen(utf8_decode($_POST['vk']))<201) {
						if(strlen(utf8_decode($_POST['ok']))<201) {
							if(strlen(utf8_decode($_POST['fb']))<201) {
								mysqli_query($db_connect, "UPDATE users SET name='".$_POST['nameChange']."',
								surname='".$_POST['surnameChange']."',
								email='".$_POST['emailChange']."',
								number='".$_POST['numberChange']."',
								vk='".$_POST['vk']."',
								ok='".$_POST['ok']."',
								fb='".$_POST['fb']."'
								WHERE (login='".$_SESSION['login']."' or email='".$_SESSION['login']."') and password='".$_SESSION['password']."'");
							}
						}
					}
				}
			}
		}
	}
};


$db_user = mysqli_query($db_connect, "SELECT name, surname, email, number, vk, ok, fb FROM users WHERE (login='".@$_SESSION['login']."' or email='".@$_SESSION['login']."') and password='".@$_SESSION['password']."'");

$db_user_object = mysqli_fetch_object($db_user);
    echo '<form class="change_form" method="post">
                <p class="h1">Ваши данные</p>
                <div class="changeData">
                    <p>Имя</p>
                    <input type="text" name="nameChange" class="nameChange" value="'.@$db_user_object->name.'">
                </div>
                <div class="changeData">
                    <p>Фамилия</p>
                    <input type="text" name="surnameChange" class="surnameChange" value="'.@$db_user_object->surname.'">
                </div>
                <div class="changeData">
                    <p>email</p>
                    <input type="email" name="emailChange" class="emailChange" value="'.@$db_user_object->email.'">
                </div>
                <div class="changeData">
                    <p>Телефон</p>
                    <input type="text" name="numberChange" class="numberChange" value="'.@$db_user_object->number.'">
                </div>
                <div class="socialData">
                    <div class="social_img vk_img"></div>
                    <p>vk</p>
                    <input type="text" name="vk" class="vk" value="'.@$db_user_object->vk.'">
                </div>
                <div class="socialData">
                    <div class="social_img ok_img"></div>
                    <p>ok</p>
                    <input type="text" name="ok" class="ok" value="'.@$db_user_object->ok.'">
                </div>
                <div class="socialData">
                    <div class="social_img fb_img"></div>
                    <p>fb</p>
                    <input type="text" name="fb" class="fb" value="'.@$db_user_object->fb.'">
                </div>
                <input type="submit" value="Сохранить"><p class="save_changes">Изменения сохранены</p>
            </form>
            <script type="text/javascript" src="js/profile.js"></script>';
?>