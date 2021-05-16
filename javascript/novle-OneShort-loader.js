$(function() {
    json = "/json/novel/novel.json";
    target = $('.OneShort');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<div class=\"Card\">';
            text += "<h3><a href=\"" + data[n].url + "\">" + data[n].title + "</a></h3>";
            text += "<p class=\"caption\">" + data[n].caption + "</p>";
            text += "<p class=\"date\">" + data[n].date.year + "/" + data[n].date.month + "/" + data[n].date.day + "</p>";
            text += '</div>';
            if (data[n].type == "OneShort") {
                $(target).append(text);
            }
        }
    });
});