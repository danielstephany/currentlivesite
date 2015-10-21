var main = function() {
	$("#menuToggle").click(function(){
		$(".navbar").animate({
			right: "0px"
		}, "slow");
		$("#menuToggle").hide();
	});
	$("#closeToggle").click(function(){
		$(".navbar").animate({
			right: "-150px"
		}, "slow");
		$("#menuToggle").show();
	});
	if ($(window).width() <= 600){	
		$(window).scroll(function(){
			$(".navbar").animate({
			right: "-150px"
			}, "slow");
			$("#menuToggle").show();
		});
	}
}

$("document").ready(main)