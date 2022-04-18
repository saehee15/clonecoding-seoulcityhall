$(function(){
  $('#btnLang').on('click',function(){
    var url = $('#lang').val();

    window.open(url)
  })

    // 스크롤트리거
    ScrollTrigger.create({
        start:"top top",
        onEnter:function(){
            $('.up_btn').addClass('on')
        },
        onLeaveBack:function(){
            $('.up_btn').removeClass('on')
        }
    })

    // 탭
     $('.cont h3').click(function (e) {
        e.preventDefault();

        var parent = $(this).parent()

        // idVal = $(this).data('tab')
        $(parent).addClass('active').siblings().removeClass('active')

        $('.'+idVal).addClass('on').siblings().removeClass('on')
    })

    $(".slide1-1").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      dots: true,
      dotsClass: "custom_paging",
      customPaging: function (slider, i) {
        console.log(slider);
        return i + 1 + "/" + slider.slideCount;
      }
    });
    
    $(".pause1").on("click", function () {
      $(".slide1-1").slick("slickPause");
    });
    
    $(".play1").on("click", function () {
      $(".slide1-1").slick("slickPlay");
    });
    

    $(".slide1-2").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      dots: true,
      dotsClass: "custom_paging",
      customPaging: function (slider, i) {
        console.log(slider);
        return i + 1 + "/" + slider.slideCount;
      }
    });
    
    $(".pause2").on("click", function () {
      $(".slide1-2").slick("slickPause");
      $('.pause2').removeClass('on');
      $('.play2').addClass('on');
    });
    
    $(".play2").on("click", function () {
      $(".slide1-2").slick("slickPlay");
      $('.pause2').addClass('on');
      $('.play2').removeClass('on');
    });
    


    // var content2 = new Swiper(".content2", {
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       },

    //     pagination: {
    //       el: ".pages",
    //       type: "fraction",
    //     },
    //     navigation: {
    //         nextEl: ".next",
    //         prevEl: ".prev",
    //     },
    //   });

    //   $('.btn_state2').click(function(){
    //     if($('.btn_state2 .pause').hasClass('on')){
    //         $('.btn_state2 .pause').removeClass('on');
    //         $('.btn_state2 .play').addClass('on');
    //         content2.autoplay.stop();
    //     }else{
    //         $('.btn_state2 .pause').addClass('on');
    //         $('.btn_state2 .play').removeClass('on');
    //         content2.autoplay.start();
    //     }
    // })

    // var slide2 = new Swiper(".slide2", {
    //     slidesPerView: 'auto',
    //     loop: true,
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       },

    //       pagination: {
    //         el: ".pagination",
    //         type: "fraction",
    //       },
    //     navigation: {
    //       nextEl: ".next",
    //       prevEl: ".prev",
    //     },
    //   });

    //   $('.btn_state').click(function(){
    //     if($('.btn_state .pause').hasClass('on')){
    //         $('.btn_state .pause').removeClass('on');
    //         $('.btn_state .play').addClass('on');
    //         slide2.autoplay.stop();
    //     }else{
    //         $('.btn_state .pause').addClass('on');
    //         $('.btn_state .play').removeClass('on');
    //         slide2.autoplay.start();
    //     }
    // })

    $(".slide2").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      dots: true,
      dotsClass: "custom_paging",
      customPaging: function (slider, i) {
        console.log(slider);
        return i + 1 + "/" + slider.slideCount;
      }
    });
    
    $(".pause2").on("click", function () {
      $(".slide1-2").slick("slickPause");
      $('.pause2').removeClass('on');
      $('.play2').addClass('on');
    });
    
    $(".play2").on("click", function () {
      $(".slide1-2").slick("slickPlay");
      $('.pause2').addClass('on');
      $('.play2').removeClass('on');
    });

    // 서브메뉴
    $(document).on("click", ".section9 li", function () {
      var hasOn = $(this).hasClass('on')
      if(hasOn){
          $('.section9 .link_item').removeClass('on')
          $('.section9 .sub').stop().slideUp(); 

      } else {
          $('.section9 .link_item').removeClass('on')
          $(this).addClass('on')

          $('.section9 .sub').stop().slideUp();  
          $(this).children('.sub').stop().slideDown();
      }
    });

    // 첫번째 메뉴에서
    $('.section9 .sub li:first-child').keydown(function (e) { 
      var keyCode = event.keyCode || event.which;
      if(keyCode == 9){
        if(event.shiftKey){
          $('.section9 .link_item').removeClass('on')
          $('.section9 .sub').stop().slideUp(); 
        }
      }
    })

    //마지막 메뉴에서
    $('.section9 .sub li:last-child').keydown(function (e) { 
      var keyCode = event.keyCode || event.which;
      if(keyCode == 9){
        if(!event.shiftKey){
          $('.section9 .link_item').removeClass('on')
          $('.section9 .sub').stop().slideUp(); 
        }
      }
    });

})