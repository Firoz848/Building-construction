$(document).ready(function(){
    $("button").click(function(){
        $("#navbar").slideToggle(1000);
    });
});
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive:{
            // 0:{
            //     items:1,
            //     nav:true
            // },
            600:{
                items:2,
                nav:false
            },
            // 1000:{
            //     items:5,
            //     nav:true,
            //     loop:false
            // }
        }
        
    });
});

// Aos Animation

$(document).ready(function(){
    AOS.init({
        duration: 1000
    });
    
});

// Button effect
$(document).ready(function(){
    $(".nav-link").on("mouseenter",function(f){
        x = f.pageX - $(this).offset().left;
        y = f.pageY - $(this).offset().top;
        $(this).find(".nav-animate").css({top:y, left:x});
    })
    $(".nav-link").on("mouseout",function(f){
        x = f.pageX - $(this).offset().left;
        y = f.pageY - $(this).offset().top;
        $(this).find(".nav-animate").css({top:y, left:x});
    })
});




