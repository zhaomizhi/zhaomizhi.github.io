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
				
				$('body').animate({scrollTop : 0 } , 600);
				return false;
			});
	});

var headheight = $("#entry-header").height();
$("#entry-header").css("posistion","fixed");
$("#main").css({
	posistion: 'relative',
	top: 'headheight'
});

});