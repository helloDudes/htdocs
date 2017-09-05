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

$db_user = mysqli_query($db_connect, "SELECT * FROM answers WHERE course='basic_knowledge'");
$db_user_array = mysqli_fetch_array($db_user);

$grade = 0;

for($i=1; $i<19; $i++) {
	$q = 'q'.$i;
	if(@$_POST[$q]==@$db_user_array[$i]) {
		$grade++;
	}
}

$db_user = mysqli_query($db_connect, "UPDATE courses SET basic_knowledge=".$grade." WHERE user_id=".$_SESSION['id']);
echo '<div class="your_grade">
    <p>Вы правильно ответили на '.$grade.' из 18 вопросов</p>
</div>';
?>

