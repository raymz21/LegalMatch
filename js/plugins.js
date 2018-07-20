$(document).ready(function(){

	
	// Basic functionality for nav_toggle_button

	

	$('.client-review .client-btn').click(function(){
		$(this).parents().children('.popUp_review').show();
	});
	
	$('.category-text .other-category').click(function(){
		$(this).parents().next('.popUp_review').show();
	});
	
	

	
	$('.close').click(function(){
		$('.popUp_review').hide();	
		$('.popUp_review').removeClass('popUp-effects');	
	});
	
	
	 $("select.category-name").change(function(){
        var categoryname = $(".category-name option:selected").val();
		if(categoryname == "Family"){
			$('.popUp_category').show();
		}
    });
	

});
