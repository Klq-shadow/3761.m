function Tab_click(hd, bd) {
  hd.click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    if (bd) {
      bd.hide().eq($(this).index()).show();
    }
  });
}

$(function () {
  $(".headwrap .menu,.burgercont .backbtn").click(function () {
    $(".burger").slideToggle();
    $(".headwrap .menu").toggleClass("on");
  });

  $(window).on("scroll", function () {
    var sTop = $(this).scrollTop();
    if (sTop > 300) {
      $("#Top").fadeIn();
    } else {
      $("#Top").fadeOut();
    }
  });

  $("#Top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  $(".page>span .cbtn").css("display", "none");
  $(".page>span").click(function () {
    $(this).children("div").show();
  });
  $(document).click(function () {
    $(".page>span .cbtn").css("display", "none");
  });
  $(".page>span .cbtn,.page>span").click(function (event) {
    event.stopPropagation();
  });
  //pic
  var imgarr = $(".showimg");
  if (imgarr.length != 0) {
    $("#content").append('<div class="imgshow"><div class="swiper-container swiperbox"><div class="swiper-wrapper"></div></div><div class="closebtn"></div></div>');
  }
  var lis = 0;
  imgarr.find("img").each(function () {
    $(this).attr("data-imgsrc", lis);
    lis++;
    var url = $(this).attr("src");
    $(".imgshow .swiper-wrapper").append('<div class="swiper-slide"> <div class="swiper-zoom-container"><img src="' + url + '"></div></div>');
  });
  imgarr.find("img").click(function () {
    var index = $(this).attr("data-imgsrc");
    $(".imgshow").fadeIn();
    var img_Swiper = new Swiper(".swiperbox", { zoom: { toggle: false } });
    img_Swiper.update();
    if (index != 0) {
      img_Swiper.slideTo(index, 0, true);
    } else {
      $(".swiperbox .swiper-wrapper").css({ transform: "translate3d(0, 0px, 0px)" });
    }
  });
  $(".imgshow").on("click", function () {
    $(".imgshow").fadeOut();
  });

  if ($(".swipe-hd").size() >= 1) {
    new Swiper("#swipe-hd", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
  Tab_click($(".php_wrap .phb_tab span"), $(".php_wrap .tab_bd .item"));
});
