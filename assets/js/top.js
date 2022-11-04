$(".ourteam-slider").slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const menuMobile = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".header-bottom");
const btnBackToTop = document.querySelector(".arrow-bnt");
const banner = document.querySelector(".banner");
const btnToDown = document.querySelector(".bnt-downd");
const head = document.querySelector(".header");
const ourWork = document.querySelector(".ourwork");    
    menuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    navMenu.classList.toggle("active");

})
    document.querySelectorAll(".header-nav").forEach(n => n.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.onscroll = () => {
  if (window.scrollY > banner.clientHeight) {
    head.classList.add("fixed");
    btnBackToTop.classList.add("active");
  } else {
    head.classList.remove("fixed");
    btnBackToTop.classList.remove("active");
  }
};

btnBackToTop.onclick = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};