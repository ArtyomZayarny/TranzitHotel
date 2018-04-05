$(document).ready(function(){
   /*Show mobile nav*/
$('.burger').click(function(){
	$('.header__nav').toggleClass('responsive');
})
	/*Show mobile sub-nav town*/
	
	if($(window).width() < 1024) {
  $('.drop_town').addClass('mob');
} else {
  // change functionality for larger screens
}
	$('.drop_town.mob').click(function(){
	    $('.link.town').removeClass('town');
		$('.dropdown ').toggleClass('dropdown_resp');
	
	});

	
});
