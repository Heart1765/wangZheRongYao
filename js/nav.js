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
})