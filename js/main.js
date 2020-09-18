// top button
(function () {
  var btn = $("#top-button");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "5000");
  });
})();
// end top button

// (function () {
//   $(function () {
//     $("#videoModal").on("hidden.bs.modal", function (e) {
//       $("#product-video").trigger("pause");
//     });
//   });
// })();


