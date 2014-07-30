$(document).ready(function() {
	$("#backbutton").hide();

	$(function(){
		$(window).scroll(function(){

			if( $(this).scrollTop() > 100 ) {
				$("#backbutton").fadeIn("slow");
			}else{
				$("#backbutton").fadeOut("slow");
			}

		});

			$("#backbutton").click(function(event){
				
				$('body').animate({scrollTop : 0 } , 1000);
				return false;
			});
	});
});