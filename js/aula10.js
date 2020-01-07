$(document).ready(function() {

	var flag = 0;

	$(".btShow").click (
		function() {
			$(this).hide();
			$(this).html("Conteúdo alterado!");
			$(this).fadeIn();
		}
	);

    $(".btShow4").click(
		function() {
			$(".btShow").hide();
			$(".btShow").html("Alterado por trigger!");
			$(".btShow").fadeIn();
		}
	);

    $(document).on("click","li",
		function() {
			$("ul li").removeClass("pintaLaranja");
			$(this).addClass("pintaLaranja");
		}
	);

	$("#btnForm").click(
		function() {
			var msg;
			if (flag == 0) {
				msg  = "Faça seu login";
				flag = 1;
			}
			else {
				msg  = "Clique para fazer o seu login";
				flag = 0;
			}
			$("#form").slideToggle();
			$(this).hide();
			$(this).html(msg);
			$(this).fadeIn();
		}
	);
});












