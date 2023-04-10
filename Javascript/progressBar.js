let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.75,
    fill: { gradient: ['#000', 'rgba(100, 43, 115, 1)'] }
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function (event, progress, stepValue) {
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
$(".js .bar").circleProgress({
    value: 0.45
});
$(".react .bar").circleProgress({
    value: 0.15
});