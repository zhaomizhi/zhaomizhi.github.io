$(document).ready(function() {
	$(function(){
		$(window).load(function() {
		/* Act on the event */
			resizeHeader();
			$("#fittext1").fitText(2, { minFontSize: '10px', maxFontSize: '60px' }) 
			});
		$(window).resize(function(){
			resizeHeader();
			$("#fittext1").fitText(2, { minFontSize: '10px', maxFontSize: '80px' }) 
			});
	});

});

function resizeHeader(){
	var heightImage = $(".unmoved-header").height();
	if(heightImage <= 500){
		$("#homecontent").css('top', heightImage -10 );
	}else{
		$("#homecontent").css('top', 490);
	}
	$("#fittext1").css('top', '35%');
	var widthContent = $("#homecontent").width() + 20;
	$("#homecontent").width(widthContent);
