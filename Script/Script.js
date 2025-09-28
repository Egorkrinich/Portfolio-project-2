const swiper = new Swiper('.Featured__swiper', {
  slidesPerView: 4,
  spaceBetween: 45,
  navigation: {
    nextEl: '.Featured-button-next',
    prevEl: '.Featured-button-prev',
  },
  breakpoints: {
    1600: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3,
    },
    650: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1
    }
  },
});
const swiper__2 = new Swiper('.Reviews__swiper', {
  slidesPerView: 2,
  spaceBetween: 55,
  centeredSlides: true,
  initialSlide: 1,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1
    }
  }
})

document.getElementById('SubscribeForm').addEventListener("submit", (e) => {
  e.preventDefault();
  const SubscribeEmail = document.getElementById('emailInput').value;
  const emailPattern = /^[a-zA-Z0-9._+%-]+@(gmail.com|mail.ru|outlook.com|yandex.ru|icloud.com|yahoo.com|ukr.net)$/i;

  if (!emailPattern.test(SubscribeEmail)) {
    alert("Please enter a correct email address");
  } else {
    alert("Subscribed successfully")
  }

})