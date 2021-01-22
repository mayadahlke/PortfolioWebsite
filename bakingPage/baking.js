
//drop down
$(document).ready(function(){
    $(".btn").click(function(e){
        $(e.currentTarget).parent('.parent').children(".dropdown").eq(0).slideToggle(400);
    }); 
});


//Get Started button
$(document).ready(function(){
    $(".start").click(function(e){
        var offset = 20; //Offset of 20px

        $('html, body').animate({
            scrollTop: $(".background1").offset().top + offset
        }, 1000);
    }); 
});

