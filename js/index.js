$(document).ready(function() {
	
	//Анимация
   $('.login_in').mouseover(function() {
	   $(this).removeClass('background_increasing1_back');
	   $(this).addClass('background_increasing1');
   });
   $('.login_in').mouseout(function() {
	   $(this).removeClass('background_increasing1');
	   $(this).addClass('background_increasing1_back');
   });
   $('.sign_up').mouseover(function() {
	   $(this).removeClass('background_increasing2_back');
	   $(this).addClass('background_increasing2');
   });
   $('.sign_up').mouseout(function() {
	   $(this).removeClass('background_increasing2');
	   $(this).addClass('background_increasing2_back');
   });
   $('.back').mouseover(function() {
	   $(this).removeClass('background_increasing3_back');
	   $(this).addClass('background_increasing3');
   });
   $('.back').mouseout(function() {
	   $(this).removeClass('background_increasing3');
	   $(this).addClass('background_increasing3_back');
   });
   $('.login_in').click(function() {
	   $('.start_button').fadeOut(1000);
	   setTimeout(function() {
		   $('.login_in_form').fadeIn(1000);
	   }, 1000);
   });
   $('.sign_up').click(function() {
	   $('.start_button').fadeOut(1000);
	   setTimeout(function() {
		   $('.start').removeClass('height_change_back');
		   $('.start').addClass('height_change');
		   $('.sign_up_form').fadeIn(1000);
	   }, 1000);
   });
   $('.login_in_form').find('.back').click(function(event) {
	   event.preventDefault();
	   $('.login_in_form').fadeOut(1000);
	   setTimeout(function() {
		   $('.start_button').fadeIn(1000);
	   }, 1000);
   });
   $('.sign_up_form').find('.back').click(function(event) {
	   event.preventDefault();
	   $('.sign_up_form').fadeOut(1000);
	   setTimeout(function() {
		   $('.start').removeClass('height_change');
		   $('.start').addClass('height_change_back');
		   $('.start_button').fadeIn(1000);
	   }, 1000);
   });
   
    //Проверка данных регистрации
	var checking = function(input_name, max_length) {
		this.input_name = input_name;
		this.max_length = max_length;
		this.checking_length = function() {
			if($('.sign_up_form').find(this.input_name).val().length>20 || $('.sign_up_form').find(this.input_name).val().length<2) {
				$('.sign_up_form').find(this.input_name+'_length').fadeIn(1000);
			}
			else {
				$('.sign_up_form').find(this.input_name+'_length').fadeOut(1000);
			}
		};
	    this.correct = function() {
			var arr = $('.sign_up_form').find(this.input_name).val().split('');
			var badLetters = false;
			for(var i=0; i<arr.length; i++) {
				var arrCode = arr[i].charCodeAt(0);
				if(arrCode<64 || arrCode>91) {
					if(arrCode<97 || arrCode>122) {
						if(arrCode<1040 || arrCode>1105) {
							badLetters = true;
						}
					}
				}
			}
			if(badLetters) {
				$('.sign_up_form').find(this.input_name+'_correct').fadeIn(1000);
			}
			else {
				$('.sign_up_form').find(this.input_name+'_correct').fadeOut(1000);
			}
		};
	};
		
	var login = new checking('.login', 20);
	$('.sign_up_form').find('.login').bind('keyup change', function() {
		login.checking_length();
		$('.sign_up_form').find('.login_repetition').fadeOut(1000);
	});
	var name = new checking('.name', 20);
	$('.sign_up_form').find('.name').bind('keyup change', function() {
		name.checking_length();
		name.correct();
	});
	var surname = new checking('.surname', 20);
	$('.sign_up_form').find('.surname').bind('keyup change', function() {
		surname.checking_length();
		surname.correct();
	});
	$('.sign_up_form').find('.password').bind('keyup change', function() {
		var password_length = $('.sign_up_form').find('.password').val().length;
		if(password_length<5 || password_length>20) {
			$('.sign_up_form').find('.password_length').fadeIn(1000);
		}
		else {
			$('.sign_up_form').find('.password_length').fadeOut(1000);
		}
		
		var password_array = $('.sign_up_form').find('.password').val().split('');
		var numeric = false;
		var letter = false;
		for(var i=0; i<$('.sign_up_form').find('.password').val().length; i++) {
			if($.isNumeric(password_array[i])) {
				numeric = true;
			}
			if(password_array[i].charCodeAt(0)>64 && password_array[i].charCodeAt(0)<91) {
				letter = true;
			}
			if(password_array[i].charCodeAt(0)>96 && password_array[i].charCodeAt(0)<123) {
				letter = true;
			}
			if(password_array[i].charCodeAt(0)>1039 && password_array[i].charCodeAt(0)<1106) {
				letter = true;
			}
		}
		if(numeric && letter) {
			$('.sign_up_form').find('.password_correct').fadeOut(1000);
		}
		else {
			$('.sign_up_form').find('.password_correct').fadeIn(1000);
		}
	});
	$('.sign_up_form').find('.password_2').bind('keyup change', function() {
		if($('.sign_up_form').find('.password').val()===$('.sign_up_form').find('.password_2').val()) {
			$('.sign_up_form').find('.password_2_correct').fadeOut(1000);
		}
		else {
			$('.sign_up_form').find('.password_2_correct').fadeIn(1000);
		}
	});
   
   //Отправка данных
   $(document).keydown(function(event) {
	   if(event.keyCode===13) {
		   event.preventDefault();
		   if($('.login_in_form').is(':visible')) {
			   $.post({
				   url: 'login_in_handler.php',
				   data: {
					   login: $('.login_in_form').find('.login').val(),
					   password: $('.login_in_form').find('.password').val()
				   },
				   dataType: "html",
				   success: function(data) {
					   $('.start').after(data);
				   },
				   error: function() {
					   window.location.href = "error.html";
				   }
			   });
		   }
		   if($('.sign_up_form').is(':visible')) {
			   setTimeout(function() {
				   if(!$('.sign_up_form').find('.warning').find('p').is(':visible')) {
					    $.post({
							url: 'sign_up_handler.php',
							data: {
								login: $('.sign_up_form').find('.login').val(),
								name: $('.sign_up_form').find('.name').val(),
								surname: $('.sign_up_form').find('.surname').val(),
								password: $('.sign_up_form').find('.password').val(),
								password_2: $('.sign_up_form').find('.password_2').val()
							},
							dataType: "html",
							success: function(data) {
								$('.start').next('script').remove();
								$('.start').after(data);
							},
							error: function() {
					   			window.location.href = "error.html";
				   			}
						});
				   }
			   }, 1100);
		   }
	   }
   });
});