$(document).ready(function() {
	//Анимация блоков курсов
	var mouse_enter = function(course, animation_num) {
		var animation = 'background_increasing'+animation_num;
		var animation_back = 'background_increasing'+animation_num+'_back';
		$(course).removeClass(animation_back);
		$(course).addClass(animation);
	};
	var mouse_leave = function(course, animation_num) {
		var animation = 'background_increasing'+animation_num;
		var animation_back = 'background_increasing'+animation_num+'_back';
		$(course).removeClass(animation);
		$(course).addClass(animation_back);
	};
	
	//Переход на страницу пользователя
	$(".start").fadeOut(1000);
	setTimeout(function() {
		$(".start").remove();
	}, 1000);
	setTimeout(function() {
		$("header").css({"display":"block"});
		$(".courses").css({"display":"block"});
	}, 2000);
	
	//Анимация блоков и курсов
	$('.course_1').mouseenter(function() {
		mouse_enter('.poster_1', '5');
	});
	$('.course_1').mouseleave(function() {
		mouse_leave('.poster_1', '5');
	});
	$('.course_2').mouseenter(function() {
		mouse_enter('.poster_2', '6');
	});
	$('.course_2').mouseleave(function() {
		mouse_leave('.poster_2', '6');
	});
	$('.course_3').mouseenter(function() {
		mouse_enter('.poster_3', '7');
	});
	$('.course_3').mouseleave(function() {
		mouse_leave('.poster_3', '7');
	});
	$('.course_4').mouseenter(function() {
		mouse_enter('.poster_4', '8');
	});
	$('.course_4').mouseleave(function() {
		mouse_leave('.poster_4', '8');
	});
	$('.course_5').mouseenter(function() {
		mouse_enter('.poster_5', '9');
	});
	$('.course_5').mouseleave(function() {
		mouse_leave('.poster_5', '9');
	});
	$('.course_6').mouseenter(function() {
		mouse_enter('.poster_6', '10');
	});
	$('.course_6').mouseleave(function() {
		mouse_leave('.poster_6', '10');
	});
	$('.course_7').mouseenter(function() {
		mouse_enter('.poster_7', '11');
	});
	$('.course_7').mouseleave(function() {
		mouse_leave('.poster_7', '11');
	});
	$('.course_8').mouseenter(function() {
		mouse_enter('.poster_8', '12');
	});
	$('.course_8').mouseleave(function() {
		mouse_leave('.poster_8', '12');
	});
	
	//Возвращение к началу
	$('.go_to_start').click(function() {
		$('.courses').fadeOut(500);
	});
	
	//Выбор курсов
	var course_animation = function(course_num) {
		var course_address = 'course_'+course_num+'/page_1.html';
		$.post({
			url: course_address,
			dataType: "html",
			success: function(data) {
				$('.courses').removeClass('courses_show');
				$('.courses').addClass('courses_hidden');
				setTimeout(function() {
					$('.courses').remove();
					$('header').after(data);
				}, 1500);
			}
		});
	};
	$('.course_1').click(function() {
		course_animation('1');
	});
	$('.course_2').click(function() {
		course_animation('2');
	});
	$('.course_3').click(function() {
		course_animation('3');
	});
	$('.course_4').click(function() {
		course_animation('4');
	});
	$('.course_5').click(function() {
		course_animation('5');
	});
	$('.course_6').click(function() {
		course_animation('6');
	});
	$('.course_7').click(function() {
		course_animation('7');
	});
	$('.course_8').click(function() {
		course_animation('8');
	});
});