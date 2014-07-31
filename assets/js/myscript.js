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


heig.css("posistion","fixed");
$("#maintop").css("position","relative");
var mainmian = $("#main");
$("#maintop").css("position","fixed");
$("#maintop").css("top","400px");

});