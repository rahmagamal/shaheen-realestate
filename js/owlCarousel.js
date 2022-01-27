$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
        loop:true,
       
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    
    items : 1,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    center: true,
    nav:true,
    dots: true, 
    
    responsive: {
    600: {
    items: 1
    }
    }
    
    
    
    });
    
    });


  
    