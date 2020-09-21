//load document before running scripts
$(document).ready(function() {

//initializations
var colorArray = [
    '#0F4C81',
    '#FF6F61',
    '#5F4B8B',
    '#88B04B',
    '#92A8D1',
    '#F7CAC9',
    '#955251',
    '#B163A3',
    '#009473',
    '#DD4124',
    '#D94F70',
    '#45B5AA'
];

//Fisher-Yates shuffle algorithm 
let colorShuffle = function(arr) {
    //tracks place in array
    let newPos,
        temp;
    //iterates backward from 11 until 0
    for (let i = arr.length - 1; i > 0; i--) {
        //pseudo random position, rounds to integer
        newPos = Math.floor(Math.random() * (i + 1));
        //switching positions
        temp = arr[i]; 
        arr[i] = arr [newPos];
        arr[newPos] = temp; 
    }
    return arr;
};
//test array shuffle
let newArray = colorShuffle(colorArray);
console.log(newArray);


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

        //game piece turns PINK on click
        click: function() {
            $(this).addClass('background', function() {

                
            }); 
        }

    });
  
});