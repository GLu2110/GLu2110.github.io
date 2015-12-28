(function($) {

$(document).ready(function () {
  $(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

});
		
	


})(jQuery);