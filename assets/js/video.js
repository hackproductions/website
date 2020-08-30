$(document).ready(function () {
    $('#showreelVideoLink').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click
        callbacks: {
            open: function () {
                iframeSrc = $(this.content).find("iframe").eq(0).clone();
                $(this.content).find("iframe").eq(0).attr('src', $(this.content).find("iframe").eq(0).attr('local-src'));
            },
            close: function () {
                $(this.content).find("iframe").remove();
                $(this.content).append(iframeSrc);
            }
        }
    });
});