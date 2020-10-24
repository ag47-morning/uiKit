$(function(){
    ////// scroll {{ //////
    var i = 0;
    var a = $("#news").scrollTop();
    $(window).on("mousewheel DOMMousewheel", function(e){
        var dt = e.originalEvent.wheelDelta;
        console.log(dt);
        console.log(a);
    })

    ////// }} scroll //////
})