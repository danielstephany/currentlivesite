var $form1 = $("#form-1");
var $form2 = $("#form-2");
var $form3 = $("#form-3");

var main = function() {
	$("#form-button-1").click(function() {
		$form3.hide();
		$form2.hide();
		$form1.show();
	})
	$("#form-button-2").click(function() {
		$form3.hide();
		$form1.hide();
		$form2.show();
	})
	$("#form-button-3").click(function() {
		$form2.hide();
		$form1.hide();
		$form3.show();
	})
}

$("document").ready(main());