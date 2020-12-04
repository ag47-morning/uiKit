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
        // console.log("현재 "+ winH + typeof winH);
        // console.log(window.pageYOffset);
        if(winH > 300) {
            $("#hd").css("background","#fff");
        }
        else {
            $("#hd").css("background","");
        }

        if(winH < topArray[1]-300) i=0;
        else if (winH < (topArray[2]-300)) i=1;
        else if (winH < (topArray[3]-300)) i=2;
        else if (winH < (topArray[4]-300)) i=3;
        else if (winH < (topArray[5]-300)) i=4;
        else if (winH >= (topArray[5]-300)) i=5;
        // console.log(i);
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

$(function(){
    //// view more click event
    var card_desc = $("#service .card.desc");
    var descH = card_desc.eq(0).innerHeight();
    var serviceH = descH * (card_desc.length+1);
    $("#service .con_more").on("click",function(e){
        e.preventDefault();
        $("#service .con_more").css("display","none");
        $("#service .card_wr").css("max-height",serviceH+"px");
        $("html, body").stop().animate({scrollTop:$("#service").offset().top + (descH*3)},300);
    })

    var thumb = $("#news .thumb");
    var thumbH = $("#news .thumb").eq(0).outerHeight(true);
    var newsH = thumbH * Math.ceil(thumb.length/4);
    $("#news .con_more").on("click",function(e){
        e.preventDefault();
        $("#news .con_more").css("display","none");
        $("#news .thumb_wr").css("max-height",newsH+"px");
        $("html, body").stop().animate({scrollTop:$("#news").offset().top + thumbH},300);
    })

    var con_card = $("#contact .card");
    var conH = $("#contact .card").eq(0).outerHeight(true);
    var contactH = conH * Math.ceil(con_card.length/3);
    $("#contact .con_more").on("click", function(e){
        e.preventDefault();
        $("contact .con_more").css("display","none");
        $("#contact .card_wr").css("max-height",contactH+"px");
        $("html, body").stop().animate({scrollTop:$("#contact").offset().top + contactH/2.5},300);

    })
})

$(function(){
    /// profile move event
    var pager = $("#move_pager a");
    var profile_name = $("#name_name");
    var profile_title = $("#name_title");
    var profile_img = $("#profile .profile_cir");

    pager.on("click", function(e){
        e.preventDefault();
        var pager_i = $(this).index();
        pager.removeClass('active');
        pager.eq(pager_i).addClass('active');
        profile_img.removeClass('show');
        profile_img.eq(pager_i).addClass('show');
        var name_chan = profile_img.eq(pager_i).data("name");
        var title_chan = profile_img.eq(pager_i).data("title");
        profile_name.text(name_chan);
        profile_title.text(title_chan);
    })

})