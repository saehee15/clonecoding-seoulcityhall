$(function(){
    ScrollTrigger.create({
        trigger:".section8",
        start:"top 100%",
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
        if($('.pause').hasClass('on')){
            $('.pause').removeClass('on');
            $('.play').addClass('on');
            content1.autoplay.stop();
        }else{
            $('.pause').addClass('on');
            $('.play').removeClass('on');
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
        if($('.pause').hasClass('on')){
            $('.pause').removeClass('on');
            $('.play').addClass('on');
            content2.autoplay.stop();
        }else{
            $('.pause').addClass('on');
            $('.play').removeClass('on');
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

    // 정지, 재생 버튼
      $('.btn_state').click(function(){
        if($('.pause').hasClass('on')){
            $('.pause').removeClass('on');
            $('.play').addClass('on');
            slide2.autoplay.stop();
        }else{
            $('.pause').addClass('on');
            $('.play').removeClass('on');
            slide2.autoplay.start();
        }
    })
    

})