$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});
var settings = {
  height: 700,

  width: 700,

  radius: 250,


  speed: 2,

  slower: 0.5,

  timer: 5,

  fontMultiplier: 35,

  hoverStyle: {
    border: 'none',
    color: '#0000'
  },

  mouseOutStyle: {
    border: '',
    color: '#0000'
  }
};

$(document).ready(function () {
  $('#tagcloud').tagoSphere(settings);
});