//load document before running scripts
$(document).ready(function() {

//initializations
let piece = [];
let colorArray = [
    "#0F4C81",
    "#FF6F61",
    "#5F4B8B",
    "#88B04B",
    "#92A8D1",
    "#F7CAC9",
    "#955251",
    "#B163A3",
    "#009473",
    "#DD4124",
    "#D94F70",
    "#45B5AA"
];

//game pieces

    $('.game-piece').on( {

        //game piece opacity higher when over object
        mouseenter: function() {
            $(this).animate({opacity:'0.2'});
        },

        //game piece opacity lower when off object
        mouseleave: function() {
            $(this).animate({opacity:'1.0'});
        },

        //game piece turns to random color from colorArray on click
        click: function() {
            $(this).css('background', function(i){
                return colorArray[i % colorArray.length];
            });
        }

    });
  
});