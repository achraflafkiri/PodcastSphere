/*  ---------------------------------------------------
    Template Name: PodcastSphere
    Description: PodcastSphere HTML Template
    Author: Achraf lafkiri
    Author URI: https://lafkiri.com/
    Version: 1.0
    Created: Achraf lafkiri
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Podcast filter
        --------------------*/
    $(".filter__controls li").on("click", function () {
      $(".filter__controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".podcast-filter").length > 0) {
      var containerEl = document.querySelector(".podcast-filter");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
	 Owl Carousel Slider
	--------------------*/
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });

  /*------------------
	 Scrolling Header
	--------------------*/
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    console.log(scroll);
    if (scroll >= 120) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  /*------------------
		Magnific
	--------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });
})(jQuery);
