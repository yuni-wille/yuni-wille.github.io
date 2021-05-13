$(function() {
    $("#js-tab-2 li").click(function() {
        $("#js-tab-2 li").removeClass("active-2");
        $(this).addClass("active-2");
        var index = $(this).index();

        $(".tab-content-2").removeClass("active-2");
        $(".tab-content-2").eq(index).addClass("active-2");
    });
});