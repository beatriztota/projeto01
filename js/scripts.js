const swiper = new Swiper(".swiper", {
  slidesPerView: 5,  
  spaceBetween: 20,  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,  
  },
  loop: false, 
});


const swiperSecond = new Swiper(".mySwiperSecond", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: "#second-carousel .swiper-button-next",
    prevEl: "#second-carousel .swiper-button-prev",
  },
  pagination: {
    el: null, 
  },
  loop: false,
  on: {
    slideChange: function () {
      updateDots(swiperSecond.realIndex, "second");
    },
  },
});

updateDots(swiperSecond.realIndex, "second");

function updateDots(activeIndex, carousel) {
  const dots = document.querySelectorAll(`.dot[data-carousel="${carousel}"]`);
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === activeIndex);
  });
}

document.querySelectorAll(`.dot[data-carousel="second"]`).forEach((dot) => {
  dot.addEventListener("click", function () {
    const index = parseInt(this.dataset.index);
    swiperSecond.slideTo(index);
    updateDots(index, "second");
  });
});
