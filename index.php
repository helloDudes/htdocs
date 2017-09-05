<?php
    if(@$_COOKIE[session_name()]) { session_start();}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>index</title>
<link href="css/reset.css" rel="stylesheet" type="text/css">
<link href="css/index.css" rel="stylesheet" type="text/css">
<link href="css/animate.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
</head>
<body>
<?php
if(!@$_SESSION['authorized']) {
    echo '<div class="start">
        <button class="start_button login_in">Вход</button>
        <button class="start_button sign_up">Регистрация</button>
        <form class="login_in_form" method="post" style="display: none">
            <div class="profileData">
                <p>Логин</p>
                <input type="text" name="login" class="login_in_input login">
            </div>
            <br>
            <div class="profileData">
                <p >Пароль</p>
                <input type="password" name="password" class="login_in_input password">
            </div>
            <div class="warning">
                <p>Не правильный логин или пароль</p>
            </div>
            <br>
            <button class="back">Назад</button>
        </form>
		
		<form class="sign_up_form" method="post" style="display: none">
		    <div class="profileData">
			    <p>Логин</p>
				<input type="text" name="login" class="login">
			</div>
			<div class="warning">
        		<p class="login_length">Неподходящая длинна</p>
        		<p class="login_repetition">Такой уже есть</p>
    		</div>
    		<div class="profileData">
        		<p>Имя</p>
        		<input type="text" name="name" class="name">
    		</div>
			<div class="warning">
	    		<p class="name_length">Неподходящая длинна</p>
        		<p class="name_correct">Неподходящие символы</p>
    		</div>
    		<div class="profileData">
        		<p>Фамилия</p>
        		<input type="text" name="surname" class="surname">
    		</div>
			<div class="warning">
	    		<p class="surname_length">Неподходящая длинна</p>
        		<p class="surname_correct">Неподходящие символы</p>
    		</div>
    		<div class="profileData">
        		<p>Пароль</p>
        		<input type="password" name="password" class="password">
    		</div>
			<div class="warning">
	    		<p class="password_length">Неподходящая длинна</p>
        		<p class="password_correct">Пароль должен содержать только буквы и цифры</p>
    		</div>
    		<div class="profileData">
        		<p>Повторите пароль</p>
        		<input type="password" name="password_2" class="password_2">
    		</div>
			<div class="warning">
        		<p class="password_2_correct">Что-то не сходится</p>
    		</div>
			<button class="back">Назад</button>
		</form>
    </div>';
}
else { require "login_in_handler.php";}
?>
</body>
</html>
