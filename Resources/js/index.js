$(document).ready(function () {
    //sticky menu
    $(".js--services-section").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky-menu");
        } else {
            $("nav").removeClass("sticky-menu");
        }
    });

    //for mixitup
    var mixer = mixitup(".container");

    //smooth scrolling
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({ scrollTop: $(hash).offset().top }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0";
}
//animated circle
$("svg.radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
});
$(window)
    .scroll(function () {
        $("svg.radial-progress").each(function (index, value) {
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() * 0.75 && $(window).scrollTop() < $(this).offset().top + $(this).height() - $(window).height() * 0.25) {
                percent = $(value).data("percentage");
                radius = $(this).find($("circle.complete")).attr("r");
                circumference = 2 * Math.PI * radius;
                strokeDashOffset = circumference - (percent * circumference) / 100;
                $(this).find($("circle.complete")).animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
            }
        });
    })
    .trigger("scroll");
