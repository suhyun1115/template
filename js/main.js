$(function(){
    var mainsw = new Swiper('.mainsw',{
        // navigation:{
        //     prevEl:'.prev1',
        //     nextEl:'.next1'
        // },
        speed:1200,
        // spaceBetween:100,
        // autoplay:{
        //     delay:3500,
        //     pauseOnMouseEnter:true,
        // },
        loop:true,

        // pagination:{
        //     el:'.mainswPage',
        //     type:'bullets',
        //     clickable:true,
        // },

        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        parallax:true,
        centerInsufficientSlides:true,
    });


    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0.6
      }

    let observer = new IntersectionObserver((e)=>{
        e.forEach((박스)=>{
            if(박스.isIntersecting)
            박스.target.classList.add('on')
            else
            박스.target.classList.remove('on')

        })
    },options)

    var div = document.querySelectorAll('.scrollmove');
    div.forEach((item)=>{
        observer.observe(item);
    })
})
