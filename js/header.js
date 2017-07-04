$(document).ready(function() {
	$('header').find('button').mouseover(function() {
		$(this).closest('button').css({'box-shadow':'2px 0px 10px 1px','margin-top':'5px'});
	});
	$('header').find('button').mouseout(function() {
		$(this).closest('button').css({'box-shadow':'0px 0px 0px 0px','margin-top':'0px'});
	});
	$('.exit').click(function() {
		document.location.href = 'exit.php';
	});
	$('.go_to_start').click(function() {
		$.post({
			url: 'courses.html',
			dataType: "html",
			success: function(data) {
				$('header').nextAll().remove('div');
				$('header').after(data);
			}
		});
	});
	var profile_click = 0;
	$('.profile').click(function() {
		$('.profileBox_content').slideToggle();
		if(profile_click%2 === 0) {
			$.post({
				url: 'profile_change.php',
				success: function(data) {
					$('.profileBox_content').html(data);
				}
			});
		}
		else {
			$('.profileBox_content').empty();
		}
		profile_click++;
	});
	var progress_click_2 = 0;
	$('.grade').click(function() {
		$('.progressBox_content').slideToggle();
		if(progress_click_2%2 === 0) {
			$.post({
				url: 'progress.php',
				success: function(data) {
					$('.progressBox_content').html(data);
				}
			});
		}
		else {
			$('.progressBox_content').empty();
		}
		progress_click_2++;
	});
});