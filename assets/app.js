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

  let cardObj = [
    {
      title: "Wireless Earbuds",
      imgUri: "head-wireless",
      smTxt_1: "RB200 Earbuds",
      smTxt_2: "S600 Earbuds",
      smTxt_3: "E20 TWS Earbuds",
    },
    {
      title: "Headphones",
      imgUri: "headphones",
      smTxt_1: "S4 HD Solo",
      smTxt_2: "Blubolt BG-300",
      smTxt_3: "Blubolt BG-100",
    },
    {
      title: "Handsfree",
      imgUri: "handsfree",
      smTxt_1: "FHF-10C Stereo",
      smTxt_2: "F13N Stereo & Bass",
      smTxt_3: "F5 Super Bass",
    },
    {
      title: "Speakers",
      imgUri: "speakers",
      smTxt_1: "Rainbow 7",
      smTxt_2: "G1000 RGB Lighting",
      smTxt_3: "Rainbow 4s",
    },
    {
      title: "Soundbars",
      imgUri: "soundbars",
      smTxt_1: "G2000 RGB Lighting",
      smTxt_2: "S600 Earbuds",
      smTxt_3: "E20 TWS Earbuds",
    },
    {
      title: "AUX Cables",
      imgUri: "aux",
      smTxt_1: "Aux-15 Audio Cable",
      smTxt_2: "M2 Audio Cable",
      smTxt_3: "M1 Audio Cable",
    },
    {
      title: "Chargers",
      imgUri: "chargers",
      smTxt_1: "FC-11QC",
      smTxt_2: "FAC-900",
      smTxt_3: "FAC-950 QC+PD",
    },
    {
      title: "Powerbanks",
      imgUri: "powerbanks",
      smTxt_1: "PD-30",
      smTxt_2: "J11 Classic",
      smTxt_3: "S20 PD-20W",
    },
    {
      title: "Charging Cables",
      imgUri: "charging-cables",
      smTxt_1: "G2000",
      smTxt_2: "FC-06 Super Fast",
      smTxt_3: "L1-PD Type-C",
    },
    {
      title: "Storage",
      imgUri: "usb-storage",
      smTxt_1: "FU-12 Metal USB",
      smTxt_2: "FU-11 Metal USB",
      smTxt_3: "FU-217 High Speed",
    },
    {
      title: "Mobile Batteries",
      imgUri: "mobile-batteries",
      smTxt_1: "1200 MAh",
      smTxt_2: "3220 MAh",
      smTxt_3: "2500 MAh",
    },
  ];

  let card = "";

  $(cardObj).each(function (_, item) {
    card += `<div class="card">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <section class="row">
        <div class="col-4">
          <img
            src="./assets/images/${item.imgUri} (1).webp"
            class="img-fluid"
          />
          <p class="text-muted">${item.smTxt_1}</p>
        </div>
        <div class="col-4">
          <img
            src="./assets/images/${item.imgUri} (2).webp"
            class="img-fluid"
          />
          <p class="text-muted">${item.smTxt_2}</p>
        </div>
        <div class="col-4">
          <img
            src="./assets/images/${item.imgUri} (3).webp"
            class="img-fluid"
          />
          <p class="text-muted">${item.smTxt_3}</p>
        </div>
      </section>
      <div class="cta"><a href="#" class="btn">View All</a></div>
    </div>
  </div>`;
  });

  card += `<div class="card">
  <div class="card-body">
    <section class="row">
      <div class="col-12">
        <div class="p-2" id="nervFaster">
          <img
            src="./assets/images/faster-nerv.webp"
            class="img-fluid"
          />
        </div>
      </div>
    </section>
    <div class="cta"><a href="#" class="btn">Explore</a></div>
  </div>
</div>`;

  $("header.header .d-grid").html(card);

  $("#productBtn").click(function () {
    $("body").toggleClass("bg_overlay");
    $(".mega_cards").toggleClass("product_mega_active");
    // $(".mega_cards").fadeIn(600);
  });

  // $("#productBtn.product_mega_active").click(function () {
  //   $(".mega_cards").fadeOut(100);
  //   $("#productBtn").removeClass("product_mega_active");
  // });
});
