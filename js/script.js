$(function(){
// //메뉴1
// $(".main > li").hover(function(){
//     $(this).find(".sub").stop().slideDown();

// }, function(){
//     $(".sub").stop().slideUp();

// })

//메뉴2
$(".main > li").mouseover(function(){
    $(this).find(".sub").stop().slideDown();
});
$(".main > li").mouseout(function(){
    $(".sub").stop().slideUp();
});

//슬라이드1
// var n = 0;
// setInterval(function(){
//     n = (n + 1) % 3;
//     console.log(n);
//     pos = n * -300 + "px";
//     $(".move").animate({top:pos},500);
// },2000)//

//슬라이드2
setInterval(function(){
    $(".move").animate({top:"-300px"},500, function(){
        $(".move").css({top:"0"});
        $(".move").append($(".move li").eq(0));
        // $(".move").append($(".move li:first-child"));
        // $(".move").append($(".move li:nth-child(1)"));
        // $(".move").append($(".move li").first());
    })//animate
},2000)//

//팝업
$(".p_click").click(function(){
    $(".pop").show();
})
$(".close").click(function(){
    $(".pop").hide();
})





})//jquery