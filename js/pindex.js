$(document).ready(function() {
    var buttonStatusUnit = $(".button-container").width() / 3;
    $(".button-status").css({
        "width": buttonStatusUnit + "px",
        "left" : buttonStatusUnit + "px"
    });
    function fcChange(pressedButton, buttonStatusUnit) {
        var classSelector, leftDistance;
        if (pressedButton == "lb") { classSelector = ".cp-link"; leftDistance = buttonStatusUnit * 0; }
        else if (pressedButton == "mb") { classSelector = ".cp-call"; leftDistance = buttonStatusUnit * 1; }
        else if (pressedButton == "rb") { classSelector = ".cp-me"; leftDistance = buttonStatusUnit * 2; }
        $(".button-status").animate({"left" : leftDistance},'0.1s');
        $(".fc-back").html("");
        $(".fc-front").fadeOut();
        $(".fc-back").fadeIn();
        $(".fc-back").html($(classSelector).html());
        $(".fc-front").html("");
        $(".fc-layer").removeClass("fc-front");
        $(".fc-back").addClass("fc-front");
        $(".fc-front").removeClass("fc-back");
        $(".fc-layer:not(.fc-front)").addClass("fc-back");
    }
    $(".button").click(function() {
        if ( $(this).hasClass("lb") ) { fcChange("lb", buttonStatusUnit) }
        else if ( $(this).hasClass("mb") ) { fcChange("mb", buttonStatusUnit) }
        else if ( $(this).hasClass("rb") ) { fcChange("rb", buttonStatusUnit) }
    });
    $(".function-container").css("width", buttonStatusUnit * 3 + "px");
    //$(".fc-front").html($(".cp-call").html());
    fcChange("mb", buttonStatusUnit);
});
