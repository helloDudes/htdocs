$(document).ready(function() {
	var mouse_enter = function(course, animation, animation_back) {
		$(course).removeClass(animation_back);
		$(course).addClass(animation);
	};
	var mouse_leave = function(course, animation, animation_back) {
		$(course).removeClass(animation);
		$(course).addClass(animation_back);
	};
	$(".start").fadeOut(1000);
	setTimeout(function() {
		$(".start").remove();
	}, 1000);
	setTimeout(function() {
		$("header").css({"display":"block"});
		$(".courses").css({"display":"block"});
	}, 2000);
	
	
	$('.course_1').mouseenter(function() {
		mouse_enter('.poster_1', 'background_increasing5', 'background_increasing5_back');
	});
	$('.course_1').mouseleave(function() {
		mouse_leave('.poster_1', 'background_increasing5', 'background_increasing5_back');
	});
	$('.course_2').mouseenter(function() {
		mouse_enter('.poster_2', 'background_increasing6', 'background_increasing6_back');
	});
	$('.course_2').mouseleave(function() {
		mouse_leave('.poster_2', 'background_increasing6', 'background_increasing6_back');
	});
	$('.course_3').mouseenter(function() {
		mouse_enter('.poster_3', 'background_increasing7', 'background_increasing7_back');
	});
	$('.course_3').mouseleave(function() {
		mouse_leave('.poster_3', 'background_increasing7', 'background_increasing7_back');
	});
	$('.course_4').mouseenter(function() {
		mouse_enter('.poster_4', 'background_increasing8', 'background_increasing8_back');
	});
	$('.course_4').mouseleave(function() {
		mouse_leave('.poster_4', 'background_increasing8', 'background_increasing8_back');
	});
	$('.course_5').mouseenter(function() {
		mouse_enter('.poster_5', 'background_increasing9', 'background_increasing9_back');
	});
	$('.course_5').mouseleave(function() {
		mouse_leave('.poster_5', 'background_increasing9', 'background_increasing9_back');
	});
	$('.course_6').mouseenter(function() {
		mouse_enter('.poster_6', 'background_increasing10', 'background_increasing10_back');
	});
	$('.course_6').mouseleave(function() {
		mouse_leave('.poster_6', 'background_increasing10', 'background_increasing10_back');
	});
	$('.course_7').mouseenter(function() {
		mouse_enter('.poster_7', 'background_increasing11', 'background_increasing11_back');
	});
	$('.course_7').mouseleave(function() {
		mouse_leave('.poster_7', 'background_increasing11', 'background_increasing11_back');
	});
	$('.course_8').mouseenter(function() {
		mouse_enter('.poster_8', 'background_increasing12', 'background_increasing12_back');
	});
	$('.course_8').mouseleave(function() {
		mouse_leave('.poster_8', 'background_increasing12', 'background_increasing12_back');
	});
	
	$('.go_to_start').click(function() {
		$('.courses').fadeOut(500);
	});
	$('.course_1').click(function() {
		$.post({
			url: 'course_1/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_2').click(function() {
		$.post({
			url: 'course_2/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_3').click(function() {
		$.post({
			url: 'course_3/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_4').click(function() {
		$.post({
			url: 'course_4/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_5').click(function() {
		$.post({
			url: 'course_5/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_6').click(function() {
		$.post({
			url: 'course_6/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_7').click(function() {
		$.post({
			url: 'course_7/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
	$('.course_8').click(function() {
		$.post({
			url: 'course_8/page_1.html',
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('.header_script').after(data);
				}, 1500);
			},
			error: function() {
				window.location.href = "error.html";
			}
		});
	});
});