$(function(){
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

    // 슬라이드
    var content1 = new Swiper(".content1", {
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

      $('.btn_state1').click(function(){
        if($('.btn_state1 .pause').hasClass('on')){
            $('.btn_state1 .pause').removeClass('on');
            $('.btn_state1 .play').addClass('on');
            content1.autoplay.stop();
        }else{
            $('.btn_state1 .pause').addClass('on');
            $('.btn_state1 .play').removeClass('on');
            content1.autoplay.start();
        }
    })
    
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
            $(this).removeClass('on')
            $(this).children('ul').stop().slideUp();
           
        } else {
            $(this).addClass('on')
            $(this).siblings('li').removeClass('on')
            $(this).children('ul').stop().slideDown();
            $(this).siblings('li').children('ul').stop().slideUp();
            
        }
      });

})