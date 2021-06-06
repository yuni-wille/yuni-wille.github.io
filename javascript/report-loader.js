$(function() {
    json = "/json/report/report.json";
    target = $('.first');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<div class=\"Card\">';
            if (data[n].month == "first") {
                text += "<h3><a href=\"" + data[n].url + "\">" + data[n].title + "</a>" + "　　" + data[n].date + "</h3>";
                target = $('.first');
            } else {
                target = $('.old');
            }
            text += '</div>';
            $(target).append(text);
        }
    });
});