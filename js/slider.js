'use strict';
// timer ting lols
// var myInterval = setInterval(function() {
//     console.log(new Date());
// }, 1000)

// Slide one to the right
// $('#slider .slides').animate({ 'margin-left': '-=100vw' }, 1000);

// Slide one to the left
//$('#slider .slides').animate({ 'margin-left': '+=100vw' }, 1000);

$(function() {

    //Cache DOM
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var currentSlide = 1;
    var $slideDots = $('.slider-controls').find('.dot');

    console.log($slideDots);


    var myInterval;

    function startSlider() {
        myInterval = setInterval(function() {
            //animate margin-left
            $slideContainer.animate({ 'margin-left': '-=100vw' }, 400, function() {
                currentSlide++; //increase current slide value

                // if the current slide is === 2 then clear #active id on dots and make dot with class 2 active
                if(currentSlide === 1){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.1').attr('id', 'active');
                }if(currentSlide === 2){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.2').attr('id', 'active');
                }if(currentSlide === 3){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.3').attr('id', 'active');
                }if(currentSlide === 4){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.4').attr('id', 'active');
                }if(currentSlide === 5){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.5').attr('id', 'active');
                }if(currentSlide === 6){
                    $slideDots.removeAttr('id', 'active');
                    $('.slider-controls').find('.6').attr('id', 'active');
                }; 

                if (currentSlide === $slides.length) { //if current slide is equal to the length of the slides object.
                    currentSlide = 1; //set current slide to 1.
                    $slideDots.removeAttr('id', 'active'); //clear #active id from dots.
                    $('.slider-controls').find('.1').attr('id', 'active'); // set id of dot 1 to #active.
                    $slideContainer.css('margin-left', 0); // and set margin left to 0 instantly.
                };
            });
        }, 4000)
    }

    function stopSlider() {
        clearInterval(myInterval);
    }

    //listen for mouseover and pause
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    //listen for click on Dots
    $slideDots.on('click', () => {
        
    });

    startSlider();
});