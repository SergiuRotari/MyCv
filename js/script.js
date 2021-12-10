$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
var settings = {
  //height of sphere container
  height: 700,
  //width of sphere container
  width: 700,
  //radius of sphere
  radius: 250,
  
  //rotation speed
  speed: 2,
  //sphere rotations slower
  slower: 0.5,
  //delay between update position
  timer: 5,
  //dependence of a font size on axis Z
  fontMultiplier: 35,
  //tag css stylies on mouse over
  hoverStyle: {
      border: 'none',
      color: '#0000'
  },
  //tag css stylies on mouse out
  mouseOutStyle: {
      border: '',
      color: '#0000'
  }
  };

  $(document).ready(function(){
      $('#tagcloud').tagoSphere(settings);
  });