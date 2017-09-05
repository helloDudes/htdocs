$.fn.color = function(par) {
	var color = $.extend({
		background: 'green',
		font: 'red',
		border: 'blue'
	}, par);
	var mod = function() {
		$(this).css({'background':color.background, 'color':color.font, 'border-color':color.border});
	};
	$(this).on('click.color', mod);
};
var promise = {
	json_call: function(address) {
		var call = $.Deferred();
		$.getJSON({
			url: address,
			success: function(result) {
				call.resolve(result.arr);
			},
			error: function(request, errorType, errorMessage) {
				console.log(request+" "+errorType+" "+errorMessage);
			}
		});
		return call;
	},
	json_call2: function(address) {
		var call2 = $.Deferred();
		$.getJSON({
			url: address,
			success: function(result) {
				call2.resolve(result.second);
			},
			error: function(request, errorType, errorMessage) {
				call2.reject(errorMessage);
			}
		});
		return call2;
	}
};
var confirmation = function(color, address) {
	this.address = address;
	var conf = this;
	this.init = function() {
		var know = $('.test1').data('knowledge');
		$('.test1').on('click', 'button', function() {
			$('.test1').find('p').html(know);
		});
		$('.b1').on('click', this.load_init);
		$('.test2').find('p').on('click', '.b2', this.css_green);
	};
	this.load_init = function() {
		var point = this;
		$.post({
			url: "ajax_test2.html",
			context: point,
			success: function(response) {
				$(this).closest('.test2').find('p').append(response);
			},
			beforeSend: function() {
				$(this).closest('.test2').find('p').append('<span>before</span>');
			},
			complete: function() {
				$(this).closest('.test2').find('p').append('<span>after</span>');
			}
		});
		console.log(conf);
	};
	this.css_green = function() {
		$(this).css({'background': color});
	};
	this.address.on('click', function() {
		$(this).css({'color':'blue'});
	});
};
var json_ajax = function() {
	this.letter = function() {
		
	};
	var cut_pice;
	this.cut = function() {
		cut_pice = $('.test3').find('div').detach();
		$(this).css({'background':'blue'});
	};
	this.past = function() {
		$('.test3').append(cut_pice);
		$(this).css({'background':'blue'});
	};
	this.postman = function() {
		$('.b3').on('click', function () {
			$.when(
				promise.json_call("ajax_test.json"),
				promise.json_call2("ajax_test2.json"))
			.then(function(result, result2) {
				$.map(result, function(message, index) {
					var address = ".cont"+index;
					$(address).find('.p1').append(message.val1);
					$(address).find('.p2').append(message.val2);
					$(address).find('.p3').attr("src", message.val3);
				});
				$('.inform').append(result2);
			});
		});
		$('.cut').on('click', this.cut);
		$('.return').on('click', this.past);
		$('button').color({background:'orange', font:'gray'});
	};
};
$(document).ready(function() {
    var one = new confirmation('red', $('.b1'));
	one.init();
	var three = new json_ajax();
	three.postman();
});