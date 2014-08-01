

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

		$(window).load(function() {
		/* Act on the event */
			resizeHeader();
			});
		$(window).resize(function(){
			resizeHeader();
			});
	});

/*heig.css("posistion","fixed");
var mainmian = $("#main");
$("#maintop").css("position","relative");
$("#maintop").css("top","400px");*/

	var len = $(".entry-image").height();
	console.log(len);
	

   $("#maintop").css("top",len - 70);
   console.log($("#maintop").position().top);

});



$(function(){
	
});

function resizeHeader(){
	var len = $(".entry-image").height();
   $("#maintop").css("top",len - 70);
}
