
(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


$(document).ready(function() {
	$("#backbutton").hide();

	$(function(){
		$(window).load(function() {
		/* Act on the event */
			resizeHeader();
			resizePageContent();
			fontResponsive();
			showHeight();
			
			
		});

		$(window).resize(function(){
			resizeHeader();
			resizePageContent();
			showHeight();
			fontResponsive();
		
	
			
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

function fontResponsive(){

	if($("#fittext1").length !== 0 ){
	jQuery("#fittext1").fitText(2, { minFontSize: '35px', maxFontSize: '90px' });
	$(".entry-title").fitText(2, { minFontSize: '23px', maxFontSize: '32px' });
	}else{
		$(".entry-title")[1].fitText(2, { minFontSize: '23px', maxFontSize: '32px' });
		return;
	}
	
}
function showHeight(){
		console.log($(".test-index").height() + "testheight");
		console.log($("#homecontent").height() + "homecontent");
		console.log($(".hentry").height() + "hentry");
}

function shadow(){
	$("#post-header").after();
}
