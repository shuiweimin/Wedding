//地图
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
map.addControl(new BMap.NavigationControl());
//open
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