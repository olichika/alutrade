$(document).ready(function() {

	$('.single-item').slick( {dots: true} );

	$('.example__show-more').click(function(){
		$(this).toggleClass('.example__img-open').next().toggle()
		return false;
	});

	$('.price__show-more').click(function(){
		$(this).toggleClass('.price__tabs-open').next().toggle()
		return false;
	});

});

$(function () {
	var tabContainers = $('.price__tabs > div');
	tabContainers.hide().filter(':first').show();
	$('.price__tabs ul a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('.price__tabs ul a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});

$(function () {
	var tabContainers = $('.price__tabs-open > div');
	tabContainers.hide().filter(':first').show();
	$('.price__tabs-open ul a').click(function () {
		tabContainers.hide();
		tabContainers.filter(this.hash).show();
		$('.price__tabs-open ul a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	}).filter(':first').click();
});