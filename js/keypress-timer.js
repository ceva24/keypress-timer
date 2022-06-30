$(function() {

    var start = null;

    $("body").keypress(function() {

        if (start) {
            $("#intervals").append("<li>" + getTimeSince(start) + "</li>");
        }

        start = new Date;
    });

    setInterval(function() { $('#time').text(getTimeSince(start)); }, 1);

    $("#reset").click(function() {

        start = null;
        $("#intervals").empty();
    });
});

function getTimeSince(date) {

    var time = date ? ((new Date - date) / 1000) : 0;

    return time.toFixed(3);
}
