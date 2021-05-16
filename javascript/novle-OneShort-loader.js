$(function() {
    json = "/json/novel/NovelAndArticle.json";
    target = $('.OneShort');
    $.getJSON(json, function(data1, data2) {
        data2 = data1.novel.OneShort;
        for (var n in data2) {
            var text = '<p>';
            text += "";
            $(target).append(text);
        }
    });
});