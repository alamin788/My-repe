$(document).ready(function(){


    //sticky menu

    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky-menu");
        }else{
            $("nav").removeClass("sticky-menu");
        }
    })

    //mixitup (portfoli)
    var mixer = mixitup(".container");

    //smooth scroll for ie/edge/safari
    $("a").on('click', function(event){

        if (this.hash !== "") {
            event.preventDefault();

            var hash =this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 800, function(){
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


