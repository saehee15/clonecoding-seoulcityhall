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
})