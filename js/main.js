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
     $('.tab a').click(function (e) {
        e.preventDefault();

        idVal = $(this).data('tap')
        $(this).addClass('on').siblings().removeClass('on')

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
    
    $(".pause").on("click", function () {
      $(".slide1-1").slick("slickPause");
    });
    
    $(".play").on("click", function () {
      $(".slide1-1").slick("slickPlay");
    });
    


    var content2 = new Swiper(".content2", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

        pagination: {
          el: ".pages",
          type: "fraction",
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
      });

      $('.btn_state2').click(function(){
        if($('.btn_state2 .pause').hasClass('on')){
            $('.btn_state2 .pause').removeClass('on');
            $('.btn_state2 .play').addClass('on');
            content2.autoplay.stop();
        }else{
            $('.btn_state2 .pause').addClass('on');
            $('.btn_state2 .play').removeClass('on');
            content2.autoplay.start();
        }
    })

    var slide2 = new Swiper(".slide2", {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },

          pagination: {
            el: ".pagination",
            type: "fraction",
          },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      $('.btn_state').click(function(){
        if($('.btn_state .pause').hasClass('on')){
            $('.btn_state .pause').removeClass('on');
            $('.btn_state .play').addClass('on');
            slide2.autoplay.stop();
        }else{
            $('.btn_state .pause').addClass('on');
            $('.btn_state .play').removeClass('on');
            slide2.autoplay.start();
        }
    })

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