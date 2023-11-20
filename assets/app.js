$(document).ready(function () {
  $(".fade_banners").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  });

  $(".cats").slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }); // Categories slider

  $(".grab_lists").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }); // Categories slider

  $(".main_featured_group").hover(
    () => {
      $(".featured_group").addClass("hover_active");
    },
    () => {
      $(".featured_group").removeClass("hover_active");
    }
  );

  $(".before .card-body svg").hover(
    function () {
      // $(".after .card-body").addClass("card_active");
      $(this)
        .parentsUntil(".cat_box")
        .closest(".card")
        .find(".after .card-body")
        .addClass("card_active");
    }
    // function () {
    //   $(".after .card-body").removeClass("card_active");
    // }
  );

  $(".activity .cat_box").mouseleave(function () {
    $(".after .card-body").removeClass("card_active");
  });
});
