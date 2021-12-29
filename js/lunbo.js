var i = 0
var j = 1
$(function () {
    $(".nav").mouseenter(function () {
        console.log(1);
        $(".zhe").stop().animate({ "height": "282px" }, 400)
        $(".drop").stop().animate({ "height": "232px" }, 500)
    })
    $(".nav").mouseleave(function () {
        console.log(2);
        $(".zhe").stop().animate({ "height": "0" }, 500)
        $(".drop").stop().animate({ "height": "0" }, 400)
    })
    // li的背景图和文字颜色
    function bgc(index) {
        $(".adBtn>ul>li").eq(index).css({
            "background-color": "rgba(0, 0, 0, 0.8)",
            "color": "#d9ad50"
        }).siblings().css({
            "background-color": "rgba(0, 0, 0, 1)",
            "color": "#b1b2be"
        })
    }
    // 轮播图
    function lun() {
        i++
        if (i % 6 == 0 && i != 0) {
            i = 0
            j++
        }
        if (i == 0 && j != 0) {
            $(".adPic").stop().animate({ "margin-left": -605 * i + "px" }, 0)
            i++
            j++
        }
        // console.log(j);
        $(".adPic").stop().animate({ "margin-left": -605 * i + "px" }, 800)
        bgc(i % 5)
    }
    var time = setInterval(lun, 3000);
    // 鼠标移入li
    $(".adBtn>ul>li").mouseover(function () {
        bgc($(this).index())
        i = $(this).index() - 1
        j = $(this).index()
        lun()
        clearInterval(time)
    })
    $(".adBtn>ul>li").mouseout(function () {
        time = setInterval(lun, 3000);
    })
    $(".adPic a").mouseover(function () {
        clearInterval(time)
    }).stop()
    $(".adPic a").mouseout(function () {
        time = setInterval(lun, 3000);
    }).stop()
    // 热门轮播
    $(".news ul li").mouseenter(function () {
        $(".news ul li").eq($(this).index()).addClass("cho").siblings().removeClass("cho")
        console.log($(".new_ul"));
        $(".new_ul").stop().animate({
            "margin-left": -325 * $(this).index() + "px"
        }, 500)
    })
})