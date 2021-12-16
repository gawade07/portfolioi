let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }

}
window.onload = () =>{
   

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');

    }

}
let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.add('active');
}
document.querySelector('#search-close').onclick = () =>{
    search.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".product-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 4,
        },
      },
  });