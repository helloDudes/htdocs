$(document).ready(function() {
	$('header>button>p').mouseover(function() {
		$(this).closest('button').css({'box-shadow':'2px 0px 10px 1px','margin-top':'5px'});
	});
	$('header>button>p').mouseout(function() {
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
				setTimeout(function() {
					$('.header_script').nextAll().remove();
					$('.header_script').after(data);
				}, 500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	var profile_click = 0;
	$('.profile>p').click(function() {
		$('.profileBox').slideToggle();
		if(profile_click%2 === 0) {
			$.post({
				url: 'profile_change.php',
				success: function(data) {
					$('.profileBox').html(data);
				},
				error: function() {
					window.location.href = "error.html";
				}
			});
		}
		else {
			$('.profileBox').empty();
		}
		profile_click++;
	});
	var progress_click_2 = 0;
	$('.grade>p').click(function() {
		$('.progressBox_content').slideToggle();
		if(progress_click_2%2 === 0) {
			$.post({
				url: 'progress.php',
				success: function(data) {
					$('.progressBox_content').html(data);
				},
				error: function() {
					window.location.href = "error.html";
				}
			});
		}
		else {
			$('.progressBox_content').empty();
		}
		progress_click_2++;
	});
});