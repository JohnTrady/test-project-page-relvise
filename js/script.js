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



/*========Burger==Menu==== */

const iconMenu = document.querySelector('.menu__icon');
const iconBody = document.querySelector('.menu__body');
const logo = document.querySelector('.header__logo');
const page = document.querySelector('.page');

iconMenu.addEventListener('click', e => {

  document.body.classList.toggle('_lock');
  iconBody.classList.toggle('_active');
  iconMenu.classList.toggle('_active');
  page.classList.toggle('_shift');

});


/* =====Menu=Footer */

document.addEventListener('click', (e) => {
const footerLabels = document.querySelectorAll('.footer__laber');
// const footMenuArrows = document.querySelectorAll('.footer__menu-arrow');
const footerMenu = document.querySelectorAll('.menu-footer');
const targetElement = e.target;
let currentActiveIndex;
if(targetElement.closest('.footer__laber')) {
  footerLabels.forEach((label , index) => {
      if(label ===  targetElement) {
       currentActiveIndex = index;
      }
  });
  footerMenu[currentActiveIndex].classList.toggle('_active');
  footerLabels[currentActiveIndex].classList.toggle('_active');
};
});




