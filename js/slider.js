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
                currentSlide++;
                if (currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                };
            });
            //update active dot
            for (currentSlide; currentSlide < $slideDots.length;) {

            }
        }, 4500)
    }

    function stopSlider() {
        clearInterval(myInterval);
    }

    //listen for mouseover and pause
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    //listen for click on Dots
    $slideDots.on('click', () => {
        var activeDot = event.target.parentNode;
        activeDot.setAttribute("id", "active");
    });

    startSlider();
});