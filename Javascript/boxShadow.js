$(function () {
    $('.shade').each(function () {
        var el = $(this);
        var elWidth = $(el).width();
        var elHeight = $(el).height();
        var elOffset = $(el).offset();
        var viewportWidth = $(document).width();
        var viewportHeight = $(document).height();
        var elCentreX = elOffset.left + (elWidth / 2);
        var elCentreY = elOffset.top + (elHeight / 2);
        var elShadow = $(this).css('box-shadow');
        var elShadowSplit = elShadow.split(' ');
        var elShadowColor = [elShadowSplit[0], elShadowSplit[1], elShadowSplit[2]].join('');
        var elShDpthX = parseInt(elShadowSplit[3].replace(/\D/g, ''));
        var elShDpthY = parseInt(elShadowSplit[4].replace(/\D/g, ''));
        $(window).on('mousemove', function (e) {
            var offX = e.pageX - elCentreX;
            var offY = e.pageY - elCentreY;
            var newShDepthX = -Math.round(offX.map(0, viewportWidth / 2, 0, elShDpthX)) + 'px';
            var newShDepthY = -Math.round(offY.map(0, viewportHeight / 2, 0, elShDpthY)) + 'px';
            var newShadow = [newShDepthX, newShDepthY, elShadowSplit[5], elShadowColor];
            $(el).css('box-shadow', newShadow.join(' '));
        });
    });

});

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}