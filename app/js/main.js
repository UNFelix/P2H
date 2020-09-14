$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    speed: 1500,
    easing: "ease",
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    centerMode: true,
    responsive: [
      {
        breapoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    mobileFirst: true,
  });
});
