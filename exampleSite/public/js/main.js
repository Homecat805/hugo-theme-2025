(() => {
  // <stdin>
  $(document).ready(function() {
    "use strict";
    const navTarget = $("#header").find(".nav");
    const navOpenBtn = $("#header").find(".nav-toggle").children(".open");
    const navCloseBtn = $("#header").find(".nav-toggle").children(".close");
    navOpenBtn.click(function() {
      navTarget.animate({ left: 0 });
      navCloseBtn.show();
      navOpenBtn.hide();
    });
    navCloseBtn.click(function() {
      navTarget.animate({ left: "-100vw" });
      navOpenBtn.show();
      navCloseBtn.hide();
    });
  });
  $(window).scroll(function() {
    var distance = $(this).scrollTop();
    if (distance > 100) {
      $("#header").hide();
    } else {
      $("#header").show();
    }
  });
})();
