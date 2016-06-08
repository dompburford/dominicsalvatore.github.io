// voight-kampff-screen 

$( document ).ready(function() {

  $(window).fadeIn(function(){
     setTimeout(function() { $(".voight-kampff-screen").fadeIn(1000); }, 1000);
     setTimeout(function() { $(".voight-kampff-screen").css({WebkitTransition : "opacity 2s ease-in-out", MozTransition : "opacity 2s ease-in-out", transition: "opacity 2s ease-in-out"}); }, 100);
  });

});

$(".voight-kampff-screen").mousedown(function(){
    return false;
});




