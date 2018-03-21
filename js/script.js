
var navButton = $('.scroll--to');
navButton.on('click', this.clickHandler.bind(this));



function clickHandler(e) {
	e.preventDefault();
	
	scrollToEl = $(e.target).closest(navButton).attr('href');
	$scrollToEl = $(scrollToEl)
	$offsetTop = $('.header').height();
	$(window).scrollTo($scrollToEl, 800, {offset: {top: - $offsetTop, left:0} });
}