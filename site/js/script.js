$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
    var regM = /ipod|ipad|iphone/gi,
     result = ua.match(regM)
    if(!result) {
     $('.sf-menu li').each(function(){
      if($(">ul", this)[0]){
       $(">a", this).toggle(
        function(){
         return false;
        },
        function(){
         window.location.href = $(this).attr("href");
        }
       );
      } 
     })
    }
   } 
   $('.main_obzor__demo').on('click',function(event){
      event.preventDefault();
      $('.popup_wrap').fadeIn(500);
      $('.popup').each(function(){
      var height = $(this).outerHeight() / -2 + 45;
      $(this).css('margin-top',height);
   });
   });
   $('.close_button').on('click',function(){
    $('.popup_wrap').fadeOut(500);
   });
   $('.ie8 form input[type="checkbox"] + label').bind('click',function(){
    $(this).toggleClass('active');
   });
   // gallery
   if($("a.gallery_img").length){
   $('a.gallery_img').each(function(){
    var rel = $(this).data('rel');
    $(this).attr('rel',rel);
   });
   $("a[rel^='gallery']").fancybox({
    cyclic:true,
    centerOnScroll:true,
    overlayColor: "#000",
    overlayOpacity: 0.7,
    titlePosition: "inside",
    titleFormat: function(title,currentArray,currentIndex,currentOpts){
      return "<p class='al_center'>" + (currentIndex + 1) + "/" + currentArray.length + "</p><p class='fancy_title al_center'>" + title + "</p>";
    },
    speedIn:600,
    speedOut:600,
    padding: 40
   });
   }
   $('.ie8 table tr:nth-child(2n+1)').css('background','#f9f9f9')
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')