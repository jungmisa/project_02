$('.close').on('click', function (e) {
	e.preventDefault();
	$('.popup').hide();
	$('.overlay').removeClass('open');
});
$('.main_banner').bxSlider({
	auto: true,
	mode:'fade',
	controls:false,
});
