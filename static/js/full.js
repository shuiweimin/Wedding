var swiper = new Swiper('.swiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var swiper = new Swiper('.swiper2', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    }
});
$(".slide-1").click(function (e) {
    e.preventDefault();
    swiper.slideTo(0, 0);
})
$(".slide-2").click(function (e) {
    e.preventDefault();
    swiper.slideTo(2, 0);
})
$(".slide-3").click(function (e) {
    e.preventDefault();
    swiper.slideTo(3, 0);
})
$(".slide-4").click(function (e) {
    e.preventDefault();
    swiper.slideTo(4, 0);
})
//open
$(".menu").click(function () {
    if ($(".nav").css('display') == "none") {
        $(".nav").addClass("open")
        $(".menu").css({ background: "url('./static/imgs/close.png')", backgroundSize: "100% 100%" })
    } else {
        $(".nav").removeClass("open")
        $(".menu").css({ background: "url('./static/imgs/menu.png')", backgroundSize: "100% 100%" })
    }
})
//回到顶部
// var timer = null;
$(".toup-icon").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500)
    // cancelAnimationFrame(timer);
    // timer = requestAnimationFrame(function fn() {
    //     var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    //     if (oTop > 0) {
    //         scrollTo(0, oTop - 100);
    //         timer = requestAnimationFrame(fn);
    //     } else {
    //         cancelAnimationFrame(timer);
    //     }
    // });
})
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(t)
    if (t >= 300) {
        $(".toup").css({ display: "block", top: `${t + 400}px` })
    } else {
        $(".toup").css("display", "none")
        console.log(115119109)
    }
    if (t > 0) {
        $(".top").css({
            height: "59px", boxShadow: "1px 0px 10px #787878", background: "rgba(255,255,255,.95)", transition: ".5s ease"
        })
    } else {
        $(".top").css({
            height: "80px", boxShadow: "none"
        })
    }
}
//当浏览器窗口大小改变时

window.onresize = function () {

    changeDivHeight();

}

function changeDivHeight() {

    var h = document.body.clientWidth;//获取页面可见宽度
    if (h <= 350) {
        $(".box").css("flexDirection", "column")
        $(".actives").css("height", "1300px")
        $(".actives .commit-more").css("top", "1160px")
    } else if(h<=768){
        $(".box").css("flexDirection", "row")
        $(".actives").css("height", "800px")
        $(".actives .commit-more").css("top", "660px")
    }else{
        $(".actives").css("height", "685px")
        $(".actives .commit-more").css("top", "530px")
    }

}