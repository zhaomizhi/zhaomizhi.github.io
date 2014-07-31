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

var heig = $("#entry-header");


/*heig.css("posistion","fixed");
var mainmian = $("#main");
$("#maintop").css("position","relative");
$("#maintop").css("top","400px");*/

});