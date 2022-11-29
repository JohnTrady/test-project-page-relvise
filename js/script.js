const servicesSwiper = document.querySelector('.services-swiper');
if (servicesSwiper) {
    const swiper = new Swiper('.services-swiper', {
        // Optional parameters
        // direction: 'vertical',
        // autoHeight:true,
        // loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type:'bullets'
        },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        initialSlide:0,
      });
};


const advantagesSwiper = document.querySelector('.slider-advantages');
if (advantagesSwiper) {
    const swiper = new Swiper('.slider-advantages', {
        // Optional parameters
        // direction: 'vertical',
        // autoHeight:true,
        // loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'progressbar'
        // },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          dragSize:'auto',
          hide: false,


        },

      

        

        // autoplay: true,

        slidesPerView: 1,

        freeMode: true,

        breakpoints: {
         560: {
           slidesPerView: 2,
         },
        
      },
      });


      
};

  //=======GET=IN=TOUCH==SLIDER====// 


const getInTouchSwiper = document.querySelector('.swiper-getintouch');

if (getInTouchSwiper) {
  const swiper = new Swiper('.swiper-getintouch', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    slideToClickedSlide: true,
    
    slidesPerView: 1,
    
    centeredSlides: true,

    initialSlide: 1,

    breakpoints: {

     720: {
      slidesPerView: 2,
     },
    


    }
  });
};




