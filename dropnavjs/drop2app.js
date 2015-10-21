var main = function() {
	$(".toggle").click(function() {
		$("#nav-sidebar").toggle("slow");
		$("#menuToggle").toggle();
	});
	if ($(window).width() <= 600){	
		$(window).scroll(function(){
			$("#nav-sidebar").hide("slow");
			$("#menuToggle").show();
		});
	}
};


$("document").ready(main);

