//Проверка корректности данных профиля в header
$(document).ready(function() {
			    var length = function(input_name, min_length, max_length) {
				    if($(input_name).val().length<min_length || $(input_name).val().length>max_length) {
					    $(input_name).closest('.changeData').addClass('length');
				    }
				    else {
					    $(input_name).closest('.changeData').removeClass('length');
				    }
			    };
			    var correct_name = function(input_name) {
				    var arr = $(input_name).val().split('');
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
					    $(input_name).closest('.changeData').addClass('correct');
				    }
				    else {
					    $(input_name).closest('.changeData').removeClass('correct');
				    }
			    };
				
			    $('.nameChange').bind('keyup change', function() {
				    length('.nameChange', 2, 20);
				    correct_name('.nameChange');
			    });
			    $('.surnameChange').bind('keyup change', function() {
				    length('.surnameChange', 2, 20);
				    correct_name('.surnameChange');
			    });
			    $('.emailChange').bind('keyup change', function() {
				    length('.emailChange', 0, 50);
					if($('.emailChange').val().length>0) {
				        var email_site = $('.emailChange').val().split('@');
				        if(email_site[1]) {
					        var email_site_division = email_site[1].split('.');
					        if(email_site_division[0].length<2||!email_site_division[1]) {
						        $('.emailChange').closest('.changeData').addClass('correct');
					        }
					        else {
						        var domain_arr=['biz','com','edu','gov','info','int','mil','name','net','org','aero','asia','cat','coop','jobs','mobi','museum','pro','tel','travel','arpa','eco','xxx','ru','ua','md','am','by','tm','uz','tj','kg','kz'];
						        var domain_checking = false;
						        for(var i=0; i<=domain_arr.length; i++) {
							        if(email_site_division[1] === domain_arr[i]) {
								        domain_checking = true;
							        }
						        }
						        if(domain_checking) {
							        $('.emailChange').closest('.changeData').removeClass('correct');
						        }
						        else {
							        $('.emailChange').closest('.changeData').addClass('correct');
						        }
					        }
				        }
				        else {
					        $('.emailChange').closest('.changeData').addClass('correct');
				        }
					}
					else {
						$('.emailChange').closest('.changeData').removeClass('correct');
					}
			    });
			    $('.numberChange').bind('keyup change', function() {
				    length('.numberChange', 0, 50);
				    var good_number = true;
				    var number_arr = $('.numberChange').val().split('');
				    for(var i=0; i<number_arr.length; i++) {
					    if(isNaN(number_arr[i])) {
						    if(number_arr[i].charCodeAt(0)!==43) {
							    if(number_arr[i].charCodeAt(0)!==45) {
								    if(number_arr[i].charCodeAt(0)!==40 && number_arr[i].charCodeAt(0)!==41) {
									    good_number = false;
								    }
							    }
						    }
					    }
				    }
				    if(good_number) {
					    $('.numberChange').closest('.changeData').removeClass('correct');
				    }
				    else {
					    $('.numberChange').closest('.changeData').addClass('correct');
				    }
			    });
			    $('.change_form').find('.socialData').find('input').bind('keyup change', function() {
				    if($(this).val().length>200) {
					    $(this).closest('.socialData').addClass('length');
				    }
				    else {
					    $(this).closest('.socialData').removeClass('length');
				    }
			    });
				$('.change_form').find('input').bind('keyup change', function() {
					setTimeout(function() {
						if($('.change_form>div').hasClass('correct') || $('.change_form>div').hasClass('length')) {
							$('.change_form').find('input:submit').css({'opacity':'0.5'});
						}
						else {
							$('.change_form').find('input:submit').css({'opacity':'1'});
						}
					}, 100);
				});
				$('.change_form').find('input:submit').mouseenter(function() {
					if(!$('.change_form>div').hasClass('correct') && !$('.change_form>div').hasClass('length')) {
						$(this).css({'box-shadow':'0px 0px 5px 0px'});
					}
				});
				$('.change_form').find('input:submit').mouseleave(function() {
					$(this).css({'box-shadow':'none'});
				});
			    $('.change_form').find('input:submit').click(function(event) {
				    event.preventDefault();
				    if(!$('.change_form>div').hasClass('correct') && !$('.change_form>div').hasClass('length')) {
					    $.post({
						    url: 'profile_change.php',
						    data: {
							    nameChange: $('.nameChange').val(),
							    surnameChange: $('.surnameChange').val(),
							    emailChange: $('.emailChange').val(),
							    numberChange: $('.numberChange').val(),
							    vk: $('.vk').val(),
							    ok: $('.ok').val(),
							    fb: $('.fb').val()
						    },
						    dataType: 'html',
							success: function() {
								$('.save_changes').fadeIn(500);
								setTimeout(function() {
									$('.save_changes').fadeOut(500);
								}, 1500);
							}
					    });
				    }
			    });
		    });