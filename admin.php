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
	
	$db_users =  mysqli_query($db_connect, "SELECT user_id, user_name, user_surname FROM courses");
	
	if(@$_POST['student'] && @$_POST['success_course']) {
		mysqli_query($db_connect, "UPDATE courses SET ".$_POST['success_course']."=1 WHERE user_id=".$_POST['student']);
	}
	
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Администратор</title>
</head>
<body>
<?php
if(@$_POST['admin_pass']=='k2773992K') {
	echo '<form method="post">
    	<select name="student">';
		while($db_users_array = mysqli_fetch_array($db_users)) {
			echo '<option value="'.$db_users_array[0].'">'.$db_users_array[1].' '.$db_users_array[2].'</option>';
		}
    	echo '</select>
    	<select name="success_course">
        	<option value="basics_work">Основы работы</option>
        	<option value="simple_network">Построение простейшей сети</option>
        	<option value="connection">Подключение к сетевому оборудованию</option>
        	<option value="vlan_1">Основы использования технологии VLAN</option>
        	<option value="vlan_2">Настройка VLAN между коммутаторами</option>
        	<option value="aggregation">Агрегация каналов</option>
        	<option value="routing">Азы маршрутизации</option>
    	</select>
    	<input type="submit">
	</form>';
}
else {
	echo '<form method="post">
	    <input type="password" name="admin_pass">
		<input type="submit">
	</form>';
}
?>
</body>
</html>