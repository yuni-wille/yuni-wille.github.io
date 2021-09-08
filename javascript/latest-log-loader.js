$(function() {
    json = "/json/log/log.json";
    target = $('.log-area');
    $.getJSON(json, function(data) {
        for (var n in data) {
            var text = '<p>';
            text += data[n].date.year + '/' + data[n].date.month + '/' + data[n].date.day;
            text += '<span>' + data[n].date.time + '</span>' + '<span>' + data[n].text + '</span>';
            text += '</p>'
            if (data[n].date.month != 9)
                text = null;
            $(target).append(text);
        }
    });
});