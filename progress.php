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
	
	@$db_user = mysqli_query($db_connect, "SELECT basic_knowledge, basics_work, simple_network, connection, vlan_1, vlan_2, aggregation, routing FROM courses WHERE user_id=".$_SESSION['id']);
	@$db_user_object = mysqli_fetch_object($db_user);
	
	$green = '#94DD48';
	$red = '#F3683A';
	$ok = '<div class="glyphicon glyphicon-ok"></div>';
	
	if(@$db_user_object->basic_knowledge) {
		$basic_grade = '/18';
		if(@$db_user_object->basic_knowledge>9) {
			$basic_knowledge = $green;
		}
		else {
			$basic_knowledge = $red;
		}
	}
	else {
		$basic_knowledge = 'none';
	};
	
	if(@$db_user_object->basics_work) {
		$basics_work = $green;
		$basics_work_ok = $ok;
	}
	else {
		$basics_work = 'none';
	};
	
	if(@$db_user_object->simple_network) {
		$simple_network = $green;
		$simple_network_ok = $ok;
	}
	else {
		$simple_network = 'none';
	};
	
	if(@$db_user_object->connection) {
		$connection = $green;
		$connection_ok = $ok;
	}
	else {
		$connection = 'none';
	};
	
	if(@$db_user_object->vlan_1) {
		$vlan_1 = $green;
		$vlan_1_ok = $ok;
	}
	else {
		$vlan_1 = 'none';
	};
	
	if(@$db_user_object->vlan_2) {
		$vlan_2 = $green;
		$vlan_2_ok = $ok;
	}
	else {
		$vlan_2 = 'none';
	};
	
	if(@$db_user_object->aggregation) {
		$aggregation = $green;
		$aggregation_ok = $ok;
	}
	else {
		$aggregation = 'none';
	};
	
	if(@$db_user_object->routing) {
		$routing = $green;
		$routing_ok = $ok;
	}
	else {
		$routing = 'none';
	};
	
	echo "<h1>Ваш прогресс</h1>
    <table>
        <tr><td>Базовые знания</td><td style='background:".$basic_knowledge."'>".@$db_user_object->basic_knowledge.@$basic_grade."</td></tr>
        <tr><td>Основы работы</td><td style='background:".$basics_work."'>".@$basics_work_ok."</td></tr>
        <tr><td>Построение сети</td><td style='background:".$simple_network."'>".@$simple_network_ok."</td></tr>
        <tr><td>Подключение к оборудованию</td><td style='background:".$connection."'>".@$connection_ok."</td></tr>
        <tr><td>Использование VLAN</td><td style='background:".$vlan_1."'>".@$vlan_1_ok."</td></tr>
		<tr><td>Настройка VLAN</td><td style='background:".$vlan_2."'>".@$vlan_2_ok."</td></tr>
		<tr><td>Агрегация каналов</td><td style='background:".$aggregation."'>".@$aggregation_ok."</td></tr>
		<tr><td>Азы маршрутизации</td><td style='background:".$routing."'>".@$routing_ok."</td></tr>
    </table>";
?>