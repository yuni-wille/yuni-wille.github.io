$(function() {
    json = "/json/novel/novel.json";
    target = $('.SeriesStory');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<div class=\"Card\">';
            if (data[n].type == "OneShort") {
                text += "<h3><a href=\"" + data[n].url + "\">" + data[n].title + "</a></h3>";
                text += "<p class=\"date\">" + data[n].date.year + "/" + data[n].date.month + "/" + data[n].date.day + "</p>";
                text += "<p class=\"caption\">" + data[n].caption + "</p>";
                target = $('.OneShort');
            } else if (data[n].type == "SeriesStory") {
                text += "<h3>" + data[n].SeriesTitle + "</h3>";
                for (var m in data[n].episode) {
                    text += "<p>" +
                        "<a href=\"" + data[n].episode[m].url + "\">" +
                        data[n].episode[m].NumberAndTitle + "</a>" + data[n].episode[m].ymd +
                        "</p>";
                }
                target = $('.SeriesStory');
            }
            text += '</div>';
            $(target).append(text);
        }
    });
});