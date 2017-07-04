//Стартовый тест
$(document).ready(function() {
	$('.test_pages').fadeIn(1000);
	$('.right').click(function() {
		var question = $(this).closest('.question');
		question.fadeOut(0);
		question.next('.question').fadeIn(0);
		$('.submit_test').removeClass('background_increasing4_back');
	});
	$('.left').click(function() {
		var question = $(this).closest('.question');
		question.fadeOut(0);
		question.prev('.question').fadeIn(0);
	});
	$('.variant').find('label').click(function() {
		if($(this).find('input:radio:checked')) {
			$(this).closest('.variant').find('label').css({'background':'none'});
			$(this).css({'background':'#D5D5D5'});
		}
	});
	$('.submit_test').mouseover(function() {
		$(this).removeClass('background_increasing4_back');
		$(this).addClass('background_increasing4');
	});
	$('.submit_test').mouseout(function() {
		$(this).removeClass('background_increasing4');
		$(this).addClass('background_increasing4_back');
	});
	$('.submit_test').click(function(event) {
		event.preventDefault();
		$.post({
			url: 'course_1/page_1_checking.php',
			dataType: "html",
			data: {
				q1: $('input[name=q1]:checked').val(),
				q2: $('input[name=q2]:checked').val(),
				q3: $('input[name=q3]:checked').val(),
				q4: $('input[name=q4]:checked').val(),
				q5: $('input[name=q5]:checked').val(),
				q6: $('input[name=q6]:checked').val(),
				q7: $('input[name=q7]:checked').val(),
				q8: $('input[name=q8]:checked').val(),
				q9: $('input[name=q9]:checked').val(),
				q10: $('input[name=q10]:checked').val(),
				q11: $('input[name=q11]:checked').val(),
				q12: $('input[name=q12]:checked').val(),
				q13: $('input[name=q13]:checked').val(),
				q14: $('input[name=q14]:checked').val(),
				q15: $('input[name=q15]:checked').val(),
				q16: $('input[name=q16]:checked').val(),
				q17: $('input[name=q17]:checked').val(),
				q18: $('input[name=q18]:checked').val(),
				q19: $('input[name=q19]:checked').val(),
				q20: $('input[name=q20]:checked').val(),
				q21: $('input[name=q21]:checked').val(),
				q22: $('input[name=q22]:checked').val(),
				q23: $('input[name=q23]:checked').val(),
				q24: $('input[name=q24]:checked').val(),
				q25: $('input[name=q25]:checked').val(),
			},
			success: function(data) {
				$('.test_content').fadeOut(500);
				setTimeout(function() {
					$('.test_content').html(data);
					$('.test_content').fadeIn(500);
				}, 500);
			}
		});
	});
});