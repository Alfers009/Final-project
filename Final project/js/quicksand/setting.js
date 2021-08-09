jQuery.noConflict();
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	
	var $data = $(".portfolio-area").clone();
	
	
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.item-thumbs');
		} else {
			var $filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}	
		$(this).addClass("active");
		return false;
	});
	
}

});