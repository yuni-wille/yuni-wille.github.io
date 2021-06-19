$(function() {
    json = "/json/novel/OneShort.json";
    target = $('.OneShort');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<div class=\"Card\">';
            text += "<h3><a href=\"" + data[n].url + "\">" + data[n].title + "</a></h3>";
            text += "<p class=\"date\">" + data[n].date.year + "/" + data[n].date.month + "/" + data[n].date.day + "</p>";
            text += "<p class=\"caption\">" + data[n].caption + "</p>";
            target = $('.OneShort');
            text += '</div>';
            if (text == '<div class=\"Card\"></div>')
                text = null;
            $(target).append(text);
        }
    });
});