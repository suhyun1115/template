const swiperSettings = {
  slidesPerView:1,

  spaceBetween:0,

  autoplay:{
      delay:2000,
  },

  speed:1200,

  loop:true,

  direction:'horizontal', //수평
  // 'vertical' 수직

  parallax:true,

  pagination: {
      el: '.main_visual_basic .pagination',
      // type: 'custom',
      // bullets progressbar fraction
  },

  effect:'slide',
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'

  followFinger:true, // 그랩 따라 움직일 것이냐

  on: {
      activeIndexChange: function () {
      console.log('swiper initialized');
      },
  },

  breakpoints:{
      0:{

      },
      768:{

      },
      1024:{

      },
      1280:{

      }
  }

};