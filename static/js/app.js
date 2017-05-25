$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("#logo").css({"margin-top": "0", "width": "130px","height":"80px"});

				$("nav").css({"background-color": "#3C3C3C"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "360px","height":"210px"});

				$("nav").css({"background-color": "#384a8a"});
				flag = false;
			}
		}


	});

});