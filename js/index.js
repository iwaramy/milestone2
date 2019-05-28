//gotop
$(function(){
  $('#gotop').click(function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('#gotop').fadeIn('fast');
    }
    else{
      $('#gotop').stop().fadeOut('fast');
    }
  });
})

$(document).ready(function(){
  //index to service tab
  var href = location.href;
  var hrefcode = href.substring(href.length-1, href.length);
  if(hrefcode == 2){
    $('.service_btn:eq(1)').addClass('active').siblings().removeClass('active');
    $('main .service>div:eq(1)').show().siblings().hide();
    $('.slideshow>img:eq(1)').stop().show().siblings().stop().hide();
  }
  if(hrefcode == 3){
    $('.service_btn:eq(2)').addClass('active').siblings().removeClass('active');
    $('main .service>div:eq(2)').show().siblings().hide();
    $('.slideshow>img:eq(2)').stop().show().siblings().stop().hide();
  }
  if(hrefcode == 4){
    $('.service_btn:eq(3)').addClass('active').siblings().removeClass('active');
    $('main .service>div:eq(3)').show().siblings().hide();
    $('.slideshow>img:eq(3)').stop().show().siblings().stop().hide();
  }
  if(hrefcode == 5){
    $('.service_btn:eq(1)').addClass('active').siblings().removeClass('active');
    $('main .about2').show().siblings().hide();
    $('.slideshow>img:eq(1)').stop().show().siblings().stop().hide();
  }
  if(hrefcode == 6){
    $('.service_btn:eq(2)').addClass('active').siblings().removeClass('active');
    $('main .about3').show().siblings().hide();
    $('.slideshow>img:eq(3)').stop().show().siblings().stop().hide();
  }
  //service tab
  $('.service_btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('main .service>div:eq('+$(this).index()+')').show().siblings().hide();
    $('.slideshow>img:eq('+$(this).index()+')').stop().fadeIn().siblings().stop().fadeOut();
  });
  //about tab
  $('.service_btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('main .about>div:eq('+$(this).index()+')').stop().show().siblings().stop().hide();
    $('.slideshow>img:eq('+$(this).index()+')').stop().fadeIn().siblings().stop().fadeOut();
  });
  var imgh = $('.slideshow>img').height();
  $('.slideshow').css('height',imgh);
  $(window).resize(function(){
    var imgh = $('.slideshow>img').height();
    $('.slideshow').css('height',imgh);
  })

  //slideshow
  $('.carousel-inner .item h2').hide();
  setInterval(function(){
    $('.carousel-inner .item.active h2').fadeIn();
    $('.carousel-inner .item.active').siblings().find('h2').hide();
  },500);

});

$(window).load(function(){
  //about
  var imgh = $('.slideshow>img').height();
  $('.slideshow').css('height',imgh);
  $(window).resize(function(){
    var imgh = $('.slideshow>img').height();
    $('.slideshow').css('height',imgh);
  })
});

//
/*
$(document).ready(function(){
  $('.q').click(function(){
    $(this).addClass('activeq').next().slideDown().parent().siblings().children('.q').removeClass('activeq').next().slideUp();
    $(this).children('.qb').addClass('activeqb').parent().parent().siblings().children('.q').children('.qb').removeClass('activeqb')
  });
});
*/

$(function() {
  if($(window).width()<1024){
    $('.map').addClass('video-container');
    //$('.form').removeClass('text-right').addClass('text-left');
  }
});
