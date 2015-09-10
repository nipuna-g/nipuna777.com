$(function() {
    var pull        = $('#pull');
        menu        = $('nav ul');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    
    
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

var bodyHeight = Math.max($("body").height()); 
var windowHeight = $(window).height(); 

var sidebarHeight = $(window).height(); 

var heightDiff = windowHeight - bodyHeight;

if(heightDiff > 0){
    $("#bottom-row").height(function (index, height) {
        heightDiff = height + heightDiff
        return (heightDiff);
    });
    
    var marginString = (heightDiff - 120) + "px 0 0 0"
    
    $("#download-cv").css("margin", marginString); 
}