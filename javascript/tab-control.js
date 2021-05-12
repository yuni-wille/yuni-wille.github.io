$(function() {
    $("#js-tab li").click(function() {
        $("#js-tab li").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();

        $(".tab-content").removeClass("active");
        $(".tab-content").eq(index).addClass("active");
    });
});