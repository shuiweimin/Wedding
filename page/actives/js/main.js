var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
});
$(".slide-1").click(function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
})
$(".slide-2").click(function (e) {
    e.preventDefault();
    swiper.slideTo(6, 0);
})

$(".menu").click(function () {
    if($(".nav").css('display') == "none"){
        $(".nav").addClass("open")
        $(".menu").css({background:"url('./imgs/close.png')",backgroundSize:"100% 100%"})
    }else{
        $(".nav").removeClass("open")
        $(".menu").css({background:"url('./imgs/menu.png')",backgroundSize:"100% 100%"})
    }
})
//回到顶部
var timer = null;
$(".toup-icon").click(function () {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
            scrollTo(0, oTop - 100);
            timer = requestAnimationFrame(fn);
        } else {
            cancelAnimationFrame(timer);
        }
    });
})
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(t)
    if (t >= 300) {
        $(".toup").css({ display: "block",top:`${t+400}px`})
    } else {
        $(".toup").css("display", "none")
    }
    if (t > 0) {
        $(".top").css({
            height: "59px", boxShadow: "1px 0px 10px #787878",background:"rgba(255,255,255,.95)",transition:".5s ease"
        })
    } else {
        $(".top").css({
            height: "80px", boxShadow: "none"
        })
    }
}