$(function() {
    json = "/json/novel/novel.json";
    target = $('.SeriesStory');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<div class=\"Card\">';
            if (data[n].type == "OneShort") {
                for (var m in data[n].story) {}
                text += "<h3><a href=\"" + data[n].story[m].url + "\">" + data[n].story[m].title + "</a></h3>";
                text += "<p class=\"date\">" + data[n].story[m].date.year + "/" + data[n].story[m].date.month + "/" + data[n].story[m].date.day + "</p>";
                text += "<p class=\"caption\">" + data[n].story[m].caption + "</p>";
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