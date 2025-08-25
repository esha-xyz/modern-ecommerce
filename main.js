/*=============== IMAGE GALLERY ===============*/
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".details_small-img");

  thumbnails.forEach(img => {
    img.addEventListener("click", () => {
      mainImage.src = img.src;
    });
  });

/*=============== SWIPER CATEGORIES ===============*/
    var swipercategories = new Swiper(".categories_container", {
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints: {

         350: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
         768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        922: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });
/*=============== SWIPER PRODUCTS ===============*/
     var swiperProducts = new Swiper(".new_container", {
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        998: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
    });
/*=============== PRODUCTS TABS ===============*/
    const tabs = document.querySelectorAll('[data-target]');
      tabContents = document.querySelectorAll('[content]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active-tab');
        });
       
          target.classList.add('active-tab');

           tabs.forEach((tab) => {
          tab.classList.remove('active-tab');
        });
          tab.classList.add('active-tab');
      });
    })

/*=============== PRODUCT DETAILS TABS ===============*/
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".detail_tab");
    const contents = document.querySelectorAll(".details_tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active-tab"));
        contents.forEach(c => c.classList.remove("active-tab"));
        tab.classList.add("active-tab");

        const targetId = tab.getAttribute("data-target");
        document.querySelector(targetId).classList.add("active-tab");
      });
    });
  });



