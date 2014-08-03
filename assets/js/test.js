$(document).ready(function() {
	$("#backbutton").hide();

	$(function(){
		$(window).load(function() {
		/* Act on the event */
			resizeHeader();
			$("#fittext1").fitText(2, { minFontSize: '10px', maxFontSize: '60px' });
		});
		$(window).resize(function(){
			resizeHeader();
			$("#fittext1").fitText(2, { minFontSize: '10px', maxFontSize: '80px' });
		});
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

});

function resizeHeader(){
	var heightImage = $(".unmoved-header").height();
	if(heightImage <= 500){
		$("#homecontent").css('top', heightImage );
	}else{
		$("#homecontent").css('top', 500);
	}
	$("#fittext1").css('top', '35%');
	/*var widthContent = $("#homecontent").width() + 20;
	$("#homecontent").width(widthContent);*/
}