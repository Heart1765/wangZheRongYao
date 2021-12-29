$(function () {
    $(".xuan").mouseover(function () {
        console.log(1);
        $(".xuan_fangda").css("display", "block")
    })
    $(".xuan").mouseout(function () {
        console.log(2);
        $(".xuan_fangda").css("display", "none")
    })
})
