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
    



    $(".slide2").slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
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
    
    $(".pause3").on("click", function () {
      $(".slide2").slick("slickPause");
      $('.pause3').removeClass('on');
      $('.play3').addClass('on');
    });
    
    $(".play3").on("click", function () {
      $(".slide2").slick("slickPlay");
      $('.pause3').addClass('on');
      $('.play3').removeClass('on');
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