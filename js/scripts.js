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


const allCategories = document.querySelector('.categories-left');
const dropdownMenu = document.querySelector('.dropdown-menu');
const subMenuContainer = document.querySelector('.sub-menu-container');
const departmentItems = document.querySelectorAll('[data-dept="true"]');

let submenuTimeout;

// Mostra o dropdown principal
allCategories.addEventListener('mouseenter', () => {
  dropdownMenu.classList.add('active');
});

dropdownMenu.addEventListener('mouseleave', () => {
  submenuTimeout = setTimeout(() => {
    if (
      !dropdownMenu.matches(':hover') &&
      !subMenuContainer.matches(':hover')
    ) {
      dropdownMenu.classList.remove('active');
      subMenuContainer.style.display = 'none';
    }
  }, 200);
});

departmentItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    clearTimeout(submenuTimeout);
    subMenuContainer.style.display = 'flex';
    console.log('Submenu de:', item.textContent);
  });

  item.addEventListener('mouseleave', () => {
    submenuTimeout = setTimeout(() => {
      if (!subMenuContainer.matches(':hover')) {
        subMenuContainer.style.display = 'none';
      }
    }, 200);
  });
});

subMenuContainer.addEventListener('mouseenter', () => {
  clearTimeout(submenuTimeout);
  subMenuContainer.style.display = 'flex';
});

subMenuContainer.addEventListener('mouseleave', () => {
  submenuTimeout = setTimeout(() => {
    subMenuContainer.style.display = 'none';
  }, 200);
});
