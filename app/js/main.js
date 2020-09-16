$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    speed: 1500,
    easing: "ease",
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    // centerMode: true,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    mobileFirst: true,
  });
});
