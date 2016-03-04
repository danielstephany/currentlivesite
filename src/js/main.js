
var main = function() {
	$(".toggle").click(function() {
		$("#nav-display").slideToggle( "slow" );
		$("#menuToggle").toggle();
		$("#closeToggle").toggle();
	});
	if ($(window).width() <= 600){	
		$(window).scroll(function(){
			$("#nav-display").hide("slow");
			$("#closeToggle").hide();
			$("#menuToggle").show();
		});
	}

	if($(window).width() >= 900) {
		$(window).scroll(function(){
			var scrollP = $(this).scrollTop();
			if (scrollP < 850) {
			$('.daniel').css({
		    transform: 'translate(0, -' + scrollP / 33 + '%)'
			});
			$('.bike').css({
		    transform: 'translate(0, -' + scrollP / 38 + '%)'
			});
			$('.home-content').css({
		    transform: 'translate(0, ' + scrollP / 2 + '%)'
			});
		};
		});
	};


};

$("document").ready(main);


