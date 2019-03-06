$(function () {

	// Menu opener hamburger

	$('.hamburger').click(function(){
		$('.menu-collapse').toggleClass('d-none').css('order', '1');
		$('.menu').toggleClass('menu-opened');
	});

	// Плавное перемещение к следующей секции

	$('.go-to').click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	// Модальное окно

	$('.parallax-btn').click(function () {
		$('#exampleModal').arcticmodal();
	});

	// Отключение клика правой кнопки мыши

	// $(this).bind("contextmenu", function(e) {
 //            e.preventDefault();
 //        });

});