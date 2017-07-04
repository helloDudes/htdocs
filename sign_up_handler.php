<!doctype html>
<?php
    $db_host = 'localhost';
    $db_user = 'root';
    $db_password = '';
    $db_name = 'mybd';
	$db_connect = mysqli_connect($db_host, $db_user, $db_password, $db_name);
    mysqli_query($db_connect, "SET NAMES 'utf-8'");
    mysqli_query($db_connect, "SET CHARACTER SET 'utf8'");
    mysqli_query($db_connect, "SET SESSION collation_connection = 'utf8_general_ci'");
	
	$correct = true;
	
	function fadeIn($name) {
		echo '$("'.$name.'").fadeIn(1000);';
		global $correct;
		$correct = false;
	};
	function fadeOut($name) {
		echo '$("'.$name.'").fadeOut(1000);';
	};
	function checking_length($class) {
		$class_full = '.'.$class.'_length';
		$str_length = strlen(utf8_decode($_POST[$class]));
		if($str_length>1 and $str_length<21) {
		    fadeOut($class_full);
	    }
	    else {
		    fadeIn($class_full);
			
	    };
	};
	
	echo '<script type="text/javascript"> $(document).ready(function() {';
	
	//login
	checking_length('login');
	$login_repetition = false;
	$db_user = mysqli_query($db_connect, "SELECT login FROM users");
	while($db_user_array = mysqli_fetch_array($db_user)) {
		if($db_user_array[0]===@$_POST['login']) {
			$login_repetition = true;
		}
	}
	if($login_repetition) {
		fadeIn('.login_repetition');
	}
	else {
		fadeOut('.login_repetition');
	}
	
	//name
	checking_length('name');
	
	//surname
	checking_length('surname');
	
	//password
	checking_length('password');
	
	//password2
	if(@$_POST['password']==@$_POST['password_2']) {
		fadeOut('.password_2_correct');
	}
	else {
		fadeIn('.password_2_correct');
	};
	
	echo '}); </script>';
	
	//registration
	if($correct) {
		mysqli_query($db_connect, "INSERT INTO users (login, name, surname, password) VALUES ('".$_POST['login']."', '".$_POST['name']."', '".$_POST['surname']."', '".$_POST['password']."')");
		
		session_start();
		$_SESSION['authorized']=true;
		$_SESSION['login']=$_POST['login'];
		$_SESSION['password']=$_POST['password'];
		$_SESSION['image']='none.png';
		$db_id = mysqli_query($db_connect, "SELECT id FROM users WHERE login='".@$_SESSION['login']."' and password='".@$_SESSION['password']."'");
		$db_id_array = mysqli_fetch_array($db_id);
		$_SESSION['id']=$db_id_array[0];
		
		mysqli_query($db_connect, "INSERT INTO courses (user_id, user_name, user_surname) VALUES (".$_SESSION['id'].", '".$_POST['name']."', '".$_POST['surname']."')");
		
		echo '<script type="text/javascript">
		    $(document).ready(function() {
				$.post({
				   url: "login_in_handler.php",
				   dataType: "html",
				   success: function(data) {
					   $("body").html(data);
				   }
			   });
			});
		</script>';
	}
?>