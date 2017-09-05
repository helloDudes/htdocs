$(document).ready(function() {
	$('.course_theory').fadeIn(1000);
	$('.right2').click(function() {
		var theory_page = $(this).closest('.theory_page');
		theory_page.fadeOut(0);
		theory_page.next('.theory_page').fadeIn(0);
	});
	$('.left2').click(function() {
		var theory_page = $(this).closest('.theory_page');
		theory_page.fadeOut(0);
		theory_page.prev('.theory_page').fadeIn(0);
	});
});