$(function() {
    json = "/json/novel/news.json";
    target = $('.log-area');
    $.getJSON(json, function(data, status) {
        for (var n in data) {
            var text = '<p>';
            text += data[n].date.year + '/' + data[n].date.month + '/' + data[n].date.day;
            text += '<span>' + data[n].date.time + '</span>' + '<span>' + data[n].text + '</span>';
            text += '</p>'
            $(target).append(text);
        }
    });
});