//load document before running scripts
$(document).ready(function() {

    $('.game-piece').on( {

        //game piece obacity higher when over object
        mouseenter: function() {
            $(this).animate({opacity:'0.2'});
        },

        //game piece obacity lower when off object
        mouseleave: function() {
            $(this).animate({opacity:'1.0'});
        },

        //game piece turns black on click
        click: function() {
            $(this).css({background:'black'});
        }

    });
  
});