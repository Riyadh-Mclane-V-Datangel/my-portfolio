$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 590) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }    
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("ative");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Designer", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

})


//External Link
function school() {
  window.open("https://www.facebook.com/stclarecollege");
}

function git() {
  window.open("https://github.com/Riyadh-Mclane-V-Datangel");
}

function insta() {
  window.open("https://www.instagram.com/__mclane__/?hl=en");
}

function linkedin() {
  window.open("https://www.linkedin.com/feed/");
}

function fb() {
  window.open("https://www.facebook.com/macmac.datangel?mibextid=ZbWKwL");
}

function tweet() {
  window.open("https://twitter.com/____RM______");
}


