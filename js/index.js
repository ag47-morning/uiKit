$(document).ready(function(){
    ////// scroll event {{ //////
    var i = 0;
    var a;
    var topArray = new Array();
    for (var j = 0; j<$("#tnb li").length; j++) {
        a = $("#container section").eq(j).offset().top;
        a = Number(a);
        topArray.push(a);
    }
    console.log(topArray);
    $(window).on("mousewheel DOMMousewheel scroll", function(){
        var winH = $(this).scrollTop();
        console.log("현재 "+ winH + typeof winH);
        console.log(window.pageYOffset);
        if(winH < topArray[1]-300) i=0;
        else if (winH < (topArray[2]-300)) i=1;
        else if (winH < (topArray[3]-300)) i=2;
        else if (winH < (topArray[4]-300)) i=3;
        else if (winH >= (topArray[4]-300)) i=4;
        console.log(i);
        $("#tnb li").removeClass("active");
        $("#tnb li").eq(i).addClass("active");
    })
    
    var ani = false;
    $("#tnb li").on("click", function(e){
        if(ani) return;
        ani = true;
        e.preventDefault();
        i = $(this).index();
        $("#tnb li").removeClass("active");
        $("#tnb li").eq(i).addClass("active");
        $("html, body").stop().animate({scrollTop:topArray[i]-100},500,function(){ani=false;});
    })

    ////// }} scroll event //////
})

// $(function(){
//     //// 새로고침 시 scrollTop : 0
//     $(window).on("beforeunload", function(){
//         $("html, body").stop().animate({scrollTop:0},0);
//     })
// })