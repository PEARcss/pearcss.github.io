$(document).ready(function(){
    //mobile nav slides in
    $(".toggler").click(function(){
        $(".menu").animate({left: "0"}, 300);
        $(".toggler").fadeOut();
    });
    $(".toggler-close").click(function(){
        $(".menu").animate({left: '-100%'});
        $(".toggler").fadeIn();
    });
    // Desktop nav expands wider on hover
     $('#desktop-nav .dmenu').mouseenter(function(){
            $('p.name').css("opacity","1");
      });
       $('#desktop-nav .dmenu').mouseleave(function(){
        $('p.name').css("opacity", "0");
      });
});