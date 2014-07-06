
/*クラス:keepaspectのアスペクト比を保持*/
$(function(){
$(window).on("load resize", function(){
$(".keepaspect").each(function() {
	var cssWidth = $(this).css("max-width");
	var cssWidth = parseInt(cssWidth, 10);
	var cssHeight = $(this).css("max-height");
	var cssHeight = parseInt(cssHeight, 10);
	var boxHeight = ($(this).width()*cssHeight)/cssWidth;
	$(this).height(boxHeight);
});
});
});           



