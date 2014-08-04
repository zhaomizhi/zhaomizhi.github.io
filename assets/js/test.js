$(document).ready(function() {
	$("#backbutton").hide();

	$(function(){
		$(window).load(function() {
		/* Act on the event */
			resizeHeader();
			resizePageContent();
			//footerPosition();
			showHeight();
	
			$("#fittext1").fitText(2, { minFontSize: '20px', maxFontSize: '80px' });
		});

		$(window).resize(function(){
			resizeHeader();
			resizePageContent();
			showHeight();
			//footerPosition();
			$("#fittext1").fitText(2, { minFontSize: '20px', maxFontSize: '80px' });
		});

		$(window).scroll(function(){

		showHeight();
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


function resizePageContent(){
	var browserWidth = $("#homecontent").width();
	if(browserWidth<= 800){
		$(".hentry").width( '100%' );
		}else{
		$(".hentry").width('800px');
		}
}

function footerPosition(){
	var heightcontent = $("#homecontent").height();
	var heightpercent = (22 - heightcontent)/heightcontent;
	heightpercent = heightpercent.toString() +  "%";

	$('.footer-wrapper').css('bottom', heightpercent);
}
function showHeight(){
		console.log($(".test-index").height() + "testheight");
		console.log($("#homecontent").height() + "homecontent");
		console.log($(".hentry").height() + "hentry");
}
