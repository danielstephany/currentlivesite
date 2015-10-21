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
};

$("document").ready(main);

