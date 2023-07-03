(function() {
    "use strict";
    let $ = window.jQuery;
   
    $(".form-control").on('focus', function() {
        $(this).parents(".form-group").addClass('focused');
    });

    $(".form-control").on('blur', function() {
        $(this).parents(".form-group").removeClass('focused');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
         //>=, not <=
        if (scroll >= 3000) {
            $(".about").addClass('d-none');
            $(".meme").addClass('headerN');
        }
    });

})()